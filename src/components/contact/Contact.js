import React, {useState } from 'react'
import "../contact/Contact.css"
import { Button, Form, Input } from 'antd';
const Contact = () => {
  
    const { TextArea } = Input;
    
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
      const [formData,setFormData] = useState({
        username:"",
        password:"",
        phone:"",
        message:""
      })

       let name , value
      const handleChange = (event) => {
         name = event.target.name;
         value = event.target.value;
         setFormData({...formData, [name]:value})
        }
        
        const submitForm = async () => {
         const {username , password , phone , message} = formData;
         if(username && password && phone && message) {
          let response = await fetch("https://sylani-website-76805-default-rtdb.firebaseio.com//contactUs.json",{
            method: "POST",
            headers: {
              "Content-Type": "website/json"
            },
            body: JSON.stringify({
              username,
              password,
              phone,
              message
            })
          });
        if(response){
          alert("Messege Send")
           setFormData({
            username:"",
            password:"",
            phone:"",
            message:"",
           })
        }else{
          alert("plz Fill the data");
        }
         }
      }


  return (
    <div>
<div className="conta" style={{marginTop:"7vh"}}>
    <h1 style={{color:"hsl(206deg 87% 38%)",fontSize:"40px"}} className="decreaseFont mb-3 text-center">Contact Us</h1>
<div className="container">
<Form className='contact-form'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item className="testWidth"
        name={['username']}
        label={<label style={{ color: "hsl(206deg 87% 38%)" }}>Username</label>}
        rules={[
          {
            required: true,
            message: 'Enter your username!',
          },
        ]}
      >
        <Input value={formData.username} name="username" onChange={handleChange}/>
      </Form.Item >

      <Form.Item className="testWidth" 
        name={['password']}
       label={<label style={{ color: "hsl(206deg 87% 38%)" }}>Password</label>}
        rules={[
          {
            required: true,
            message: 'Enter your password!',
          },
        ]}
      >
        <Input.Password value={formData.password} name="password"  onChange={handleChange}/>
      </Form.Item>
      <Form.Item className="testWidth"
        name={['phone']}
        label={<label style={{ color: "hsl(206deg 87% 38%)" }}>Phone</label>}
        rules={[
          {
            required: true,
            message: 'Enter your phone!',
          },
        ]}
      >
        <Input value={formData.phone} name="phone" onChange={handleChange}/>


      </Form.Item>
      <Form.Item className="testWidth"
       name={['message']}
      label={<label style={{ color: "hsl(206deg 87% 38%)" }}>Message</label>}
      rules={[
        {
          required: true,
          message: 'Enter your phone!',
        },
      ]}
      >
          <TextArea rows={4} value={formData.message} name="message" onChange={handleChange}/>
        </Form.Item>

      <Form.Item className="testWidth"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" onClick={submitForm}>
          Send Message
        </Button>
      </Form.Item>
    </Form>

</div>
</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.448940862987!2d67.06587741475997!3d24.882663784043494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eea39ffafe1%3A0x66f953936852019b!2sSaylani%20Welfare%20Int.%20Trust!5e0!3m2!1sen!2s!4v1671646697205!5m2!1sen!2s" width="100%" height="350" style={{border:"0"}} allowFullscreen="" title="Search " loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact
