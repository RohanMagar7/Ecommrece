import React from "react";
import Link from "next/link";
import { Button, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        className=" bg-black text-white text-center mt-10 "
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            INSTAND STORE
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Jobs
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            DOCUMENTATION
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 " variant="h6">
            SOLUTIONS
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            LEGAL
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 Instand Store. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made by Rohan Magar
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons Made by{""}
            <Link
              href={"https://www.freepik.com"}
              color="inherit"
              underline="always"
            >
              {" "}
              Freepik
            </Link>
            {""}
            From{""}
            <Link
              href={"https://www.flaticon.com"}
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
