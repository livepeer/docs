// MAY create iframe embed. not confident.

// export default function LumaCalendar({ calendarId }) {
//   useEffect(() => {
//     // Load Luma embed script
//     const script = document.createElement("script");
//     script.src = "https://embed.lu.ma/checkout-button.js";
//     script.id = "luma-checkout";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Cleanup
//       const existingScript = document.getElementById("luma-checkout");
//       if (existingScript) {
//         existingScript.remove();
//       }
//     };
//   }, []);

//   return <div data-luma-calendar={calendarId} className="w-full" />;
// }
