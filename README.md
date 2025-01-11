<p>
<a>

<img align="center" src="./src/assets/coverPage2.png"/>
<img align="center" src="./src/assets/coverPage.png"/>
</a>
</p>
<p>
<a>
<h1 align="center">FaiRate</h1>
<p align="center">Service sharing Platform</p>
</a>
</p>

***
#### *Purpose*
*The purpose of this website is to create a collaborative platform where users can review, share, and interact with various services. It allows users to log in securely, add their services, and provide valuable insights through detailed reviews. By enabling users to manage their contributions and explore others' feedback, the system fosters informed decision-making and trust within the community. This platform also serves as a practical learning tool, demonstrating the implementation of a full-stack application. It highlights key functionalities such as user authentication, seamless CRUD operations, secure database management, and interactive review systems, making it a comprehensive and engaging experience.*

#### *Features*
*User information are secured here with google Firebase auth*
- *User can Roaming here freely and can share services*
- *Only signed in user can share their thoughts in this platform*
- *User can check their contribution and even can update it whenever they need to do*
- *Google sign in and email sign is so simple no need to verify email or password **(Note:password should be 6characters long and must have a special character, one uppercase and lowercase letters)***
- *only Signed up user can post, edit, delete reviews*
- *On detail page user will see the review cunt of that specific service and can add their own reviews there*
- *Only Signed in user can add services, and can update or delete his post*




#### *Technologies*
***This simple single page website was created with-***
- ***Framer Motion***
  - Basic Enter Animation.
  - Gestures.
  - WhileInView
  
- ***React with Vite***
    - useState 
    - useEffect,
    - Context API..
    - Custom Hooks..
    - Reusable Components.
  
- ***React Router Dom***
  - useRouterError,
  - Navigate Component,
  - Outlet,  
  - useNavigate,
  - useLocation,
  - Link
  - NavLink
- ***Firebase Authentications***
  - Google SigIn
  - Sign Up with Email and Password
  - Update Profile
  - Signin with Email & Password

- ***Node js & Express js***
  - POST
  - GET
  - PUT
  - PATCH
  - DELETE methods
  - Router
  - Middlewares
  - Error handlers
- ***MongoDB.***
  - insertOne()
  - find()
  - findOne()
  - DeleteOne()
  - updateOne()
- ***Others***
  - tanStackQuery
  - axios
  - react-hook-form
  - react-rating-stars-component
  - react-toastify
  - react-countUp 
  - sweetalert2
  - material-tailwind
  - daisy-ui
  - lenis


<br/>

<p>
<a>
<h1 align="center">Routes & Components</h1>
</a>
</p>



```mermaid
flowchart LR
classDef routeStyle fill:#D1E8FF,stroke:#004AAD,stroke-width:2px,color:#004AAD,font-size:18px,font-weight:bold;
classDef componentStyle fill:#FFEBCD,stroke:#D2691E,stroke-width:2px,color:#8B4513,font-size:18px,font-style:italic;
classDef secureStyle fill:#00897b,stroke:#00897b,stroke-width:2px,color:#fff,font-size:20px,font-style:italic;
classDef homeStyle fill:#00897b57,color:#000,font-size:16px,font-style:italic;

id1([main.jsx Root]) --> id2([MainLayout])
id2 --> id5([Private Route]) 
id5-->id40([My Reviews])
id5-->id41([My Services])
id5-->id42([Add Service])

id2 --> id8([Home]) --> id9([Home Page])
id9 --> id20([Banner Carousel])
id9 --> id21([Feature Services])
id9 --> id22([Users,Services & Reviews])
id9 --> id23([Who we Are])
id9 --> id24([Our Partners])
id9 --> id25([FAQ])
id2 --> id6([Services]) --> id7([All Services Page])

id2 --> id10([Login])
id2 -->id54([Register])
id2 --> id12([Details]) --> id13([Details Page])
id2 --> id14([Error]) --> id15([ErrorPage])



class id2,id4,id6,id8,id10,id12,id14,id16,id54 routeStyle
class id1,id5,id7,id9,id11,id13,id15,id17,id19,id55,id40,id41,id42,id43,id18 componentStyle
class id40,id41,id42 secureStyle
class id20,id21,id22,id23,id24,id25 homeStyle

```



<br/>


<p>
<a>
<h1 align="center">Server Routers and Handlers</h1>
</a>
</p>




```mermaid
flowchart RL
classDef routeStyle fill:#D1E8FF,stroke:#004AAD,stroke-width:2px,color:#004AAD,font-size:18px,font-weight:bold;
classDef componentStyle fill:#FFEBCD,stroke:#D2691E,stroke-width:2px,color:#8B4513,font-size:18px,font-style:italic;
classDef secureStyle fill:#00897b80,stroke:#00897b80,stroke-width:2px,color:#00897b8,font-size:20px,font-style:italic;
classDef homeStyle fill:#00897b,color:#fff,font-size:16px,font-style:italic;

id2([ index.js])
id2 --> id5([Config]) 
id5-->id40([dataBase.js])


id2 --> id9([Routers]) 
id9 --> id20([Service Routers])
id9 --> id21([Service Review Router])
id9 --> id22([My Service Router])
id9 --> id23([Review Routers])

id2 --> id6([Errors]) --> id7([Custom Error Handler])
id2 --> id12([Controllers]) --> id13([Async Error Handler])
id12 --> id15([Global Error Handler])



class id2,id4,id6,id8,id10,id12,id14,id16,id54 routeStyle
class id1,id5,id7,id9,id11,id13,id15,id17,id19,id55,id40,id41,id42,id43,id18 componentStyle
class id40,id41,id42 secureStyle
class id20,id21,id22,id23,id24,id25 homeStyle

```





***
[_Server Repo_](https://github.com/Dev-NayanBiswas/Assignment-11-Server)
<br/>
[_Feel Free to Visit **FaiRate**_](https://assignment-11-fairate.netlify.app/)

<br/>
<br/>
<br/>
<br/>
<p>
    <a>
    <h4><i></i></h4>
    </a>
    
</p>
<br/>
<br/>
<br/>
<br/>
<br/>


### *Thanks for Visiting*
### <a>*FaiRate*</a>

***Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.***

<a> ― *Bill Gates*</a> 





