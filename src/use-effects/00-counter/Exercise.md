# useEffect: Counter with Timeout and Cleanup

## Goal

Create a counter that increments automatically every second, using useEffect to manage the timer and clean up the effect.

## Instructions

Instructions:

- Use `useState` to manage the counter value.
- Use `useEffect` to create a timer that increments the counter every second.
- Add cleanup logic in the effect to remove the timer when the component is unmounted (to avoid memory leaks).
- Bonus: Add a button to "pause" and "resume" the counter, modifying the effect accordingly. 
