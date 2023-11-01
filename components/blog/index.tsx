import { Box, Container, Divider } from "@mui/material";
import React from "react";
import BlogCard from "./blog-card";
import PageBackgroundPaper from "../utils/page-background-paper";

const Blog = () => {
  return (
    <PageBackgroundPaper>
      <Container>
        <BlogCard />
      </Container>
      <Box sx={{ height: 50 }} />
    </PageBackgroundPaper>
  );
};

export default Blog;
