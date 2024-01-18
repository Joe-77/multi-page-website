import Country from "./Country";
import Form from "./Form";

const Contact = () => {
    window.scrollTo(0,0)
  return (
    <section>
      <div className="bg-primary flex flex-col sm:flex-row justify-around sm:items-center sm:h-[420px] relative px-6 sm:px-0 py-10 sm:py-0 mt-3">
        <div className="absolute top-0 left-0 w-full h-full bg-circle bg-no-repeat bg-left"></div>
        <div className="sm:w-2/5 text-white ">
          <h3 className="text-2xl mb-4 tracking-widest">Contact Us</h3>
          <p className="text-xs leading-6 opacity-65">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div>
          <Form/>
        </div>
      </div>
      <Country/>
    </section>
  );
}

export default Contact
