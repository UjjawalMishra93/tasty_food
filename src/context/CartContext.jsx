import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Monitor auth state
    useEffect(() => {
        const fetchUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            if (session?.user) {
                fetchCart(session.user.id);
            } else {
                setCartItems([]);
                setIsLoading(false);
            }
        };

        fetchUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            if (session?.user) {
                fetchCart(session.user.id);
            } else {
                setCartItems([]);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const fetchCart = async (userId) => {
        try {
            setIsLoading(true);
            const { data, error } = await supabase
                .from('cart_items')
                .select('*, products(*)')
                .eq('user_id', userId)
                .order('created_at', { ascending: true });

            if (error) throw error;
            setCartItems(data || []);
        } catch (error) {
            console.error('Error fetching cart:', error);
            // toast.error('Could not load cart');
        } finally {
            setIsLoading(false);
        }
    };

    const addToCart = async (product, quantity = 1) => {
        if (!user) {
            toast.error('Please login to add items to cart');
            return;
        }

        try {
            // Check if item already exists
            const existingItem = cartItems.find(item => item.product_id === product.id);

            if (existingItem) {
                const newQuantity = existingItem.quantity + quantity;
                const { error } = await supabase
                    .from('cart_items')
                    .update({ quantity: newQuantity })
                    .eq('id', existingItem.id);

                if (error) throw error;

                // Optimistic update
                setCartItems(prev => prev.map(item =>
                    item.id === existingItem.id ? { ...item, quantity: newQuantity } : item
                ));
                toast.success('Cart updated!');
            } else {
                const { data, error } = await supabase
                    .from('cart_items')
                    .insert([{ user_id: user.id, product_id: product.id, quantity }])
                    .select('*, products(*)')
                    .single();

                if (error) throw error;

                // For the optimistic update, we need the product details. 
                // The select('*, products(*)') above joins it, but sometimes it takes a generic structure.
                // We'll manually attach the product object we passed in to ensure immediate UI feedback if needed.
                const newItem = { ...data, products: product };

                setCartItems(prev => [...prev, newItem]);
                toast.success('Added to cart!');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            toast.error('Failed to add item');
        }
    };

    const updateQuantity = async (itemId, newQuantity) => {
        if (newQuantity < 1) return;

        try {
            // Optimistic update
            setCartItems(prev => prev.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            ));

            const { error } = await supabase
                .from('cart_items')
                .update({ quantity: newQuantity })
                .eq('id', itemId);

            if (error) {
                // Revert if error
                throw error;
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
            toast.error('Failed to update quantity');
            // Revert state would go here in a more complex impl
            fetchCart(user.id); // Sync back
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            // Optimistic
            setCartItems(prev => prev.filter(item => item.id !== itemId));

            const { error } = await supabase
                .from('cart_items')
                .delete()
                .eq('id', itemId);

            if (error) throw error;
            toast.success('Removed from cart');
        } catch (error) {
            console.error('Error removing item:', error);
            toast.error('Failed to remove item');
            fetchCart(user.id);
        }
    };

    const cartTotal = cartItems.reduce((total, item) => {
        const price = item.products?.price || 0;
        return total + (price * item.quantity);
    }, 0);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            isLoading,
            addToCart,
            updateQuantity,
            removeFromCart,
            cartTotal,
            cartCount,
            user
        }}>
            {children}
        </CartContext.Provider>
    );
};
