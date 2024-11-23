"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useMediaQuery } from "@mui/material";

import CreatePost from "@/src/components/createPost";
import NavbarComponent from "@/src/components/navBar/Navbar";

export default function Admin() {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className="flex flex-col px-4 items-center">
      <NavbarComponent />

      <div
        className="flex w-full flex-col "
        style={{
          justifyContent: "center",
          alignItems: matches ? "" : "center",
        }}
      >
        <Tabs aria-label="Options">
          <Tab
            key="posts"
            style={{ width: matches ? "10rem" : "" }}
            title={
              <div>
                {" "}
                <span>
                  {" "}
                  <PostAddIcon />{" "}
                </span>
                Create Post
              </div>
            }
          >
            <CreatePost />
          </Tab>
          <Tab
            key="users"
            style={{ width: matches ? "10rem" : "" }}
            title="Posts"
          >
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="profile"
            style={{ width: matches ? "10rem" : "" }}
            title="Profile"
          >
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
