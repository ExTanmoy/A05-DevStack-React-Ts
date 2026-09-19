# Project Name:
          Dev Stack


# Description:
          A web application where different types of technologis are available. Users can choose any technologies to create relevant projects.


# Technology that are used:
          - Tailwind CSS
          - JavaScript
          - TypeScript
          - React
          - React Icons
          - Daisy UI
          - React hot toastify
          - Vite


# 3 features about my project
          - Explore frontend, backend, database etc different types of technologies. You can add any technology
          - If you add any technology the button will be disabled and the border of the tech card will become changed and immediately will add in your stack section.
          - You can remove any of your selected technologies one by one or you can also remove all of your selected technologies through one click.


# Answering the React Questions
          1. What is JSX, and why is it used in React?
            - Ans: JSX is a syntax extension for JavaScript that lets you write HTML-like structures directly inside React code to describe what the user interface should look like.

          2. What is the difference between props and state?
            - Ans: Props are read-only data passed down from a parent component, while state is mutable data managed within a component that triggers re-renders when updated.

          3. What does the useState hook do, and where did you use it in this project?
            - Ans: useState lets functional components create and update internal state; it is typically used in a project to track dynamic values like input fields or toggle states.
          
          4. What does the useEffect hook do, and why did you need it to load the JSON data?
            - Ans: useEffect performs side effects in components, and it is used to fetch JSON data asynchronously after the component renders without blocking the UI.
          
          5. Why does every item in a .map() list need a unique key prop?
            - Ans: Unique keys help React efficiently identify, reorder, and update specific list items without re-rendering the entire list.
          
          6. What is conditional rendering? Show one place you used it (example: the empty stack message).
            - Ans: Conditional rendering displays different UI elements based on specific conditions, such as using {items.length === 0 && <p>Stack is empty</p>} to show a message when a list has no data.

          7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
            - Ans:A parent passes data to a child via props, and a child sends data back by calling a callback function passed to it by the parent.
          