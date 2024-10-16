import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import React, { useState } from "react";

function ContactMe() {
  const [formDetails,setFormDetails] = useState({
    email:"",
    name:"",
    message:""
  })
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(formDetails);
    setTimeout(()=>{
      formDetails.email = "";
      formDetails.name = "";
      formDetails.message = "";
    },5000)
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -30 }} // Starts invisible and slightly lower
        whileInView={{ opacity: 1, x: 0 }} // Fades in and moves up when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.23 }}
        className="mx-auto grid w-[350px] gap-6"
      >
        <div className="grid gap-2 text-center">
          <h1 className="md:mb-[-65px] font-extrabold text-blue-300 mt-[200px] text-[30px] ">
            Contact Me
          </h1>
          <p className="text-balance text-muted-foreground">
            Get in touch with me for any queries or collaborations.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              onChange={(e)=>setFormDetails({...formDetails,email:e.target.value})}
              className="text-white bg-blue-950 border-2 focus:border-blue-300
                   border-blue-300 p-[5px] rounded-lg "
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="name">Name</Label>
            </div>
            <input
              id="name"
              type="text"
              required
              name="name"
              onChange={(e)=>setFormDetails({...formDetails,name:e.target.value})}
              className="text-white bg-blue-950 border-2 focus:border-blue-300
                   border-blue-300 p-[5px] rounded-lg "
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="message">Message</Label>
            </div>
            <textarea
              id="message"
              type="text"
              required
              name="message"
              onChange={(e)=>setFormDetails({...formDetails,message:e.target.value})}
              className="text-white bg-blue-950 border-2 focus:border-blue-300
                   border-blue-300 p-[5px] rounded-lg "
            />
          </div>
          <Button
            type="submit"
            onClick={handleSubmission}
            className="bg-gradient-to-tr from-blue-600 to-white text-black"
          >
            Send
          </Button>
        </div>
      </motion.div>
    </>
  );
}

export default ContactMe;
