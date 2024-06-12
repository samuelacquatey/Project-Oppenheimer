import { component$, $} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";



export default component$(() => {
  console.log("Hello from the Backend!!");

  const handleClick=$(()=>{
    console.log("Hello from Frontend!!")
  });

  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding!
      </div>
      <button onClick$={()=>{handleClick}}>Click me</button>
      
    </>
  );
  
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
