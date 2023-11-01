import { Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import blogsData from "./blog-card-data.json";
import { Color } from "@/styles/color";
import MotionContainer from "../utils/motion-container";
const BlogCard = () => {
  function formatDate(dateString: string) {
    const [month, day, year] = dateString.split("-");
    const date = new Date(`${year}-${month}-${day}`);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }
  return (
    <MotionContainer>
      <Grid container gap={3}>
        {blogsData.blogs.map((blog) => (
          <Grid
            item
            key={blog.id}
            lg={2.8}
            md={5.8}
            sm={5.7}
            xs={12}
            sx={{ height: "max-content", maxHeight: 750, margin: "0 auto" }}
          >
            <Card>
              <CardMedia component="img" src={blog.img} sx={{ height: 300 }} />
              <Stack sx={styles.stack}>
                <Typography sx={{ color: Color.state.light_gray }}>
                  Admin
                </Typography>
                <Typography sx={{ color: Color.state.light_gray }}>
                  {formatDate(blog.date)}
                </Typography>
                <Typography sx={{ color: Color.action.default }}>
                  {blog.commentsQuantity} Comments
                </Typography>
              </Stack>
              <Typography
                variant="h6"
                sx={{ color: Color.state.gray, paddingX: 2 }}
              >
                {blog.title}
              </Typography>
              <Typography variant="body1" sx={styles.bodyContent}>
                {blog.content}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MotionContainer>
  );
};

export default BlogCard;
const styles = {
  stack: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    padding: 2,
  },
  bodyContent: {
    color: Color.state.light_gray,
    padding: 2,
    paddingBottom: 4,
  },
};
