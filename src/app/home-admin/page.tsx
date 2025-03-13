"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useMediaQuery } from "@mui/material";

import CreatePost from "@/src/components/createPost";
import NavbarComponent from "@/src/components/navBar/Navbar";
import PostsWithCoverSelector from "@/src/components/postsAdmin";

const Admin: React.FC = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center"
    >
      <div
        className="flex w-full flex-col "
        style={{
          justifyContent: "center",
          alignItems: matches ? "" : "center",
          marginTop: "2rem",
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
              <PostsWithCoverSelector />
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
};

export default Admin;
