"use client"

import React from "react";
import {Tabs, Tab, Card, CardBody, Switch, Input, Link, Button, Textarea} from "@nextui-org/react";
import PostAddIcon from '@mui/icons-material/PostAdd';
import CreatePost from "@/src/components/createPost";
import NavbarComponent from "@/src/components/navBar/Navbar";

export default function Admin() {
    const [selected, setSelected] = React.useState("login");

  return (
    <div className="flex flex-col px-4 items-center">
      <NavbarComponent />
     
      <div className="flex w-full flex-col items-center">
        <Tabs className=" items-center"  aria-label="Options" >
          <Tab style={{ width:'20vw'}} key="posts" title={ <div> <span> <PostAddIcon /> </span>Create Post</div> }>

            <CreatePost />
        

       
          </Tab>
          <Tab style={{width:'20vw'}} key="users" title="Posts">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </CardBody>
            </Card>  
          </Tab>
          <Tab  style={{width:'20vw'}} key="profile" title="Profile">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
