CS 262 - Lab 2
This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/02management/lab.html

Answers to the lab questions:
    What does the main component function in this application return?
        It returns the main page.

    What is the value of using core components? Note that these components are not standard ReactJS components.
        It has cross-platform compatibility.

    Do you see any of the technologies from last unit’s guide that are used here to specify the styling of the application?
        in the last lab, we made a basic app that ran in the browser. This weeks lab used the same basic frameowork but expounded apon it with the addition of buttons and images.

    How are curly braces ({}) used in the JSX code.
        they are used to embed JavaScript expressions or variables in JSX code.

    What is the purpose of the asynchronous (Asyc) methods?
        you can run multiple at the same time.

    Where does this application code use hooks?
        const pickImageAsync = async () => {...}

    Identify one anonymous function in the code.
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>