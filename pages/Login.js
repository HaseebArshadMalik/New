import Link from "next/link";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const res=await fetch('http://localhost/NewProject/api/Doctor/Login', {
    method: 'POST',
    
    headers: {
      'Accept': "application/json",
      'Content-Type': "application/json"
  },
    body:JSON.stringify({
      
      "EMAIL": email,
      "PASSWORD": password,
      
    }),
  })
  const res2 = await res.json()
  if(res2.error){
    M.toast({html: res2.error,classes:"red"})
    router.push('/Login')
  }
  else{
      console.log(res2)
       router.push('/Doctorview')
  }
      
    } catch (error) {
      
    }
    
  

   

    // const response = await fetch(
    //   `http://localhost/NewProject/api/Doctor/SignupDoctor`,
    //   {
    //     mode:"no-cors",
    //     method: 'POST',
    //     headers: {"Content-Type": "application/json"},
       
    //   },
     
      
    // );

    // if (response.ok) {
    //   const data = await response.json();
    //   console.log(data);
    //   // navigation.navigate('DirDashboard');
    // } else {
    //  console.log('Invalid Username or password!');
    // }


  // const requestOption = {
  //   method: "POST",
  //   mode: "no-cors",
  //   headers: {
  //     "Content-Type": "application/json; ",
  //   },
    
  };
  return (
    <div className="container ">
      <div className=" card center-align">
        <h3>Login Page</h3>
        <form onSubmit={(e) => handlelogin(e)}>
          <FormControl>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <button
              className="btn waves-effect waves-light #1565c0 blue darken-3"
              type="submit"
            >
              Login
              <i className="material-icons right"></i>
            </button>
            <Link href="/Signup">
              <h5>Dont have a account ?</h5>
            </Link>
          </FormControl>
        </form>
      </div>
    </div>
  );
};
export default Login;
