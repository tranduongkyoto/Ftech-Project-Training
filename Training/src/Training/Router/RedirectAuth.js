import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation, 
  //PrivateRoute
} from "react-router-dom";
export default function RedirectAuth() {
    return (
        <ProvideAuth>
            <Router>
                <div>
                    <AuthButton />
                    <ul>
                        <li>
                            <Link to="/public">Public</Link>
                        </li>
                        <li>
                            <Link to="/protected">Protected</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/public">
                            <PublicPage />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <PrivateRoute path="/protected">
                            <ProtectedPage />
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        </ProvideAuth>
    )
}

const fakeAuth = {
    isAuthenticated: false,

    // cb is a function
    signin(cb){
        //console.log("cb from fakeAuth: ", cb);
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb){
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

const authContext = createContext();

//context provider component
function ProvideAuth({children}){

    // auth ={
    //     user,
    //     signin,
    //     signout
    // }
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

function useAuth(){
    //console.log(useContext(authContext));
    
    return useContext(authContext);
}

function useProvideAuth(){
    const [user, setUser] = useState(null);

//     Closures
// Closures là một trong những chức năng quyền lực nhất của JavaScript. 
// JavaScript cho phép lồng các function vào nhau, và cấp quyền cho function con, để function con có toàn quyền truy cập vào tất cả các biến và function được định nghĩa bên trong function cha (và tất cả biến và function mà function cha được cấp quyền truy cập đến).

// Tuy nhiên, function cha không có quyền truy cập đến các biến và function được định nghĩa bên trong function con. Điều này tạo nên một dạng bảo mật khép kín cho các biến của function con.

// Bên cạnh đó, vì function con có quyền truy cập đến scope của function cha, các biến và function được định nghĩa bên trong function cha sẽ vẫn tồn tại dù việc thực thi function cha đã kết thúc, nếu function con xoay sở để tồn tại lâu hơn thời gian sống của function cha. 
// Một closure được tạo ra khi một function con bằng cách nào đó trở nên khả dụng với bất kỳ scope nào bên ngoài function cha.

// Hãy xem các ví dụ sau đây để hiểu hơn về Closures

// VD1:

// function numberGenerator() {
//   // Local “free” variable that ends up within the closure
//   var num = 1;
//   function checkNumber() {
//     console.log(num);
//   }
//   num++;

//   return checkNumber;
// }

// var number = numberGenerator();
// number(); // 2
// Trong ví dụ trên, hàm numberGenerator() tạo ra một biến local num và checkNumber() (một hàm in ra num trong console). 
//Hàm checkNumber() không có bất kỳ biến local nào trong nó. Tuy nhiên, nó có quyền truy cập vào các biến bên ngoài function, bởi vì numberGenerator() là một closure. 
//Do đó, nó có thể sử dụng biến num được khai báo trong numberGenerator() để log num trong console sau khi numberGenerator() được trả lại.
    const signin = cb =>{
        return fakeAuth.signin(()=>{
            setUser("user");
            //console.log("From fakeAuth")
            //console.log("cb : ", cb)
            cb();
            //return "signin";
        });
    };
    const signout = cb =>{
        return fakeAuth.signout(()=>{
            setUser(null);
            cb();
        });
    };
    //console.log(signin());
    return {
        user,
        signin,
        signout
    };
}

function AuthButton(){
    let history = useHistory();
    let auth = useAuth();
    return auth.user ? (
        <p>
            Welcome!{" "}
            <button
                onClick={()=>{
                    auth.signout(()=> history.push("/"));
                }}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p>Yout are not logged in.</p>
    );
}

function PrivateRoute({children, ...rest}){
    let auth = useAuth();
    return (
        <Route 
            {...rest}
            render={({location})=>
                auth.user ?(
                    children
                ) : (
                    <Redirect 
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

function PublicPage(){
    return <h3>Public</h3>
}

function ProtectedPage(){
    return <h3>Protected</h3>
}

function LoginPage(){
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
    let { from } = location.state || {from : {pathname: "/"}};
    let login = ()=>{
        auth.signin(()=>{
            history.replace(from);
        });
    };
    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    )
}