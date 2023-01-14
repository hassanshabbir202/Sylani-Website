import React, { useState } from "react";
import "../Admissions/Admission.css";
import Foter from "../Footer/Foter"
import { Button, Form, Input } from 'antd';

const Admission = (props) => {
  const layout = {
    labelCol: {
      span: 8, 
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };

  const [data,setData] = useState({
    fname:"",
    email:"",
    city:"",
    phone:"",
    Educat:"",
    cnic:"",
    age:"",
    course:""
  })

  let name , value
  const handleOnChange = (event) => {
    name = event.target.name;
    value = event.target.value

    setData({...data , [name] : value})
  }

   const submitData = async () => {
       const {fname, email, city , phone , Educat , cnic , age , course} = data;
       if(fname && email && city && phone && Educat && cnic && age && course){
        let response = await fetch("https://sylani-website-76805-default-rtdb.firebaseio.com/RegistrationForm.json",{
          method: "POST",
          headers: {
            "Content-Type": "sylaniWebsite/json"
          },
          body: JSON.stringify({
              fname,
              email,
              city,
              phone,
              Educat,
              email,
              cnic,
              age,
              course
          })
          
        })
        if(response){
          alert("Form SuccessFully Submit!");
          setData({
            fname:"",
            email:"",
            city:"",
            phone:"",
            Educat:"",
            cnic:"",
            age:"",
            course:""
          })
        } else{
      alert("Plz Fill the Data")
     }
      }
       
       }

  return (
    <div>
<div className="cont" style={{padding:"6vh",width:"100%"}}>
  <h1 className="mb-3 text-center formheading" style={{color:"hsl(85deg 54% 51%)"}}>{props.heading}</h1>
<Form className="main_form" style={{marginLeft:"8vw"}} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
      className="mainCont"
        name={['fname']}
        label={<label style={{ color: "hsl(206deg 87% 38%)" }}>Name</label>}
        style={{marginLeft:"10vw",width:"50%",color:"orange"}}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  style={{height:"40px", }} className="test" value={data.fname} name="fname" onChange={handleOnChange}/>
      </Form.Item>
      <Form.Item style={{marginLeft:"10vw",width:"50%"}}
        name={['email']}
        label={<label style={{ color: "hsl(206deg 87% 38%)" }}>Email</label>}
        rules={[
          {
            type: 'email',
            required: true,
          },
        ]}
      >
        <Input  style={{height:"40px"}} className="test" value={data.email} name="email" onChange={handleOnChange}/>
      </Form.Item>
      <Form.Item style={{marginLeft:"10vw",width:"50%"}} 
       name={['city']}
       label={<label style={{ color: "hsl(206deg 87% 38%)" }}>City</label>}
       rules={
        [
          {
            required: true,
          }
        ]
      }>
        <Input  style={{height:"40px"}} className="test"  value={data.city} name="city" onChange={handleOnChange}/>
      </Form.Item>
      <Form.Item style={{marginLeft:"10vw",width:"50%"}}
       name={['phone']}
       label={<label style={{ color: "hsl(206deg 87% 38%)" }}>phone</label>}
        rules={
        [
          {
            required: true,
          }
        ]
      }>
        <Input  style={{height:"40px",}} className="test"  value={data.phone} name="phone" onChange={handleOnChange}/>
      </Form.Item>
      <Form.Item style={{marginLeft:"10vw",width:"50%"}}
       name={['Educat']}
       label={<label style={{ color: "hsl(206deg 87% 38%)" }}>Educat</label>}
         rules={
        [
          {
            required: true,
          }
        ]
      }>
        <Input style={{height:"40px",}} className="test"  value={data.Educat} name="Educat" onChange={handleOnChange}/>
      </Form.Item>
      <Form.Item style={{marginLeft:"10vw",width:"50%"}}
       name={['cnic']}
       label={<label style={{ color: "hsl(206deg 87% 38%)" }}>cnic</label>}
         rules={
        [
          {
            required: true,
          }
        ]
      }>
        <Input  style={{height:"40px",}} className="test"  value={data.cnic} name="cnic" onChange={handleOnChange}/>
      </Form.Item>
      <Form.Item style={{marginLeft:"10vw",width:"50%"}}
        name={['age']}
        label={<label style={{ color: "hsl(206deg 87% 38%)" }}>age</label>}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={{height:"35px"}}  className="test" value={data.age} name="age" onChange={handleOnChange}/>
      </Form.Item>
      <Form.Item style={{marginLeft:"10vw",width:"50%"}}
       name={['course']}
       label={<label style={{ color: "hsl(206deg 87% 38%)" }}>course</label>}
         rules={
        [
          {
            required: true,
          }
        ]
      }>
        <Input style={{height:"40px" , }}  className="test" value={data.course} name="course" onChange={handleOnChange}/>
      </Form.Item>
     
      <Form.Item style={{marginLeft:"10vw",width:"50%"}}
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={submitData}>Submit</Button>
      </Form.Item>
    </Form>
</div>
     
      <div className="footer">
     <Foter/>
  </div>
    </div>
  );
};

export default Admission;
