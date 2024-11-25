"use client";
import { UserContext } from "@/src/context/user";
import { Post } from "@/src/interfaces/interfaces";
import React, { useState, useContext, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
  Pagination,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Paper } from "@mui/material";

type CoverPreviews = {
  [postId: string]: string;
};

const PostsWithCoverSelector: React.FC = () => {
  const { getAllPosts, uploadImage } = useContext(UserContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const [coverPreviews, setCoverPreviews] = useState<CoverPreviews>({});
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage] = useState<number>(5);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentPostId, setCurrentPostId] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData: Post[] = await getAllPosts();
      setPosts(postsData);
    };
    fetchPosts();
  }, [getAllPosts, uploadImage]);

  const handleFileChange = (
    postId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverPreviews((prev) => ({
          ...prev,
          [postId]: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (
    postId: string,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const fileInput = document.getElementById(
      `cover-${postId}`
    ) as HTMLInputElement;
    if (fileInput && fileInput.files?.[0]) {
      const response = await uploadImage(postId, fileInput.files[0]);
      alert(response.msg);
    } else {
      alert(`No file selected for post ${postId}`);
    }
  };

  const handleEditPost = (postId: string) => {
    setCurrentPostId(postId);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentPostId("");
    setCurrentImage(null);
  };

  const handleImageUpload = async () => {
    if (currentImage) {
      const response = await uploadImage(currentPostId, currentImage);
      alert(response.msg);
      handleCloseModal();
    } else {
      alert("No image selected!");
    }
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  // Get paginated posts
  const paginatedPosts = posts.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Box sx={{ padding: "20px" }}>
      <h2 style={{ margin: "1.5rem", fontSize: "2.5rem" }}>Posts</h2>

      {/* Table with horizontal scroll */}
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 400, overflowX: "auto" }}
      >
        <Table sx={{ minWidth: 900 }} aria-label="posts table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Subtitle</TableCell>
              <TableCell>Main Content</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.subtitle || "No subtitle"}</TableCell>
                <TableCell>{post.mainContent.slice(0, 100)}...</TableCell>
                <TableCell>
                  <img
                    src={post.image}
                    alt={`Cover for ${post.title}`}
                    style={{
                      width: "100px",
                      height: "auto",
                      borderRadius: "4px",
                    }}
                  />
                </TableCell>
                <TableCell>
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleString()
                    : "No date"}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleEditPost(post.id)}
                    variant="outlined"
                    color="secondary"
                    sx={{ marginTop: "10px" }}
                  >
                    Edit Image
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Pagination
          count={Math.ceil(posts.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>

      {/* Modal for editing image */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Edit Image</DialogTitle>
        <DialogContent>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCurrentImage(e.target.files?.[0] ?? null)}
            style={{ marginBottom: "10px" }}
          />
          {currentImage && (
            <Box sx={{ marginTop: "10px" }}>
              <img
                src={URL.createObjectURL(currentImage)}
                alt="Image preview"
                style={{ width: "100px", height: "auto", borderRadius: "4px" }}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleImageUpload} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PostsWithCoverSelector;
