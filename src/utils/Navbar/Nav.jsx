import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import lo from "../../assests/LogoBlue.svg";
import { Stack } from "@mui/material";
import "./nav.css";
import Button from "../Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { RxCross2 } from "react-icons/rx";
import { CgMenuRight } from "react-icons/cg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const services = [
  {
    title: "App Marketing",
    features: [
      {
        name: "App Store Optimization",
        to: "/App-Store-Optimization",
        windowScrollAmount: 0,
      },
      {
        name: "Creatives & CVR Optimization",
        to: "/Creatives & CVR Optimization",
        windowScrollAmount: 100,
      },
      {
        name: "User Acquisition & Media",
        to: "/User Acquisition & Media",
        windowScrollAmount: 200,
      },
      { name: "Retention", to: "/Retention", windowScrollAmount: 300 },
    ],
  },
  {
    title: "App Development",
    features: [
      {
        name: "iOS App Development Services",
        to: "/iOS App Development Services",
        windowScrollAmount: 0,
      },
      {
        name: "Android App Development Services",
        to: "/Android App Development Services",
        windowScrollAmount: 100,
      },
      {
        name: "Flutter App Development Services",
        to: "/Flutter App Development Services",
        to: "/Flutter App Development Services",
        windowScrollAmount: 200,
      },
      {
        name: "React App Development Services",
        to: "/React App Development Services",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "Graphic Designing",
    features: [
      {
        name: "Banner Design and Logo Design",
        to: "/Banner Design and Logo Design",
        windowScrollAmount: 0,
      },
      {
        name: "Illustration Design",
        to: "/Illustration Design",
        windowScrollAmount: 100,
      },
      {
        name: "3D Design",
        to: "/3D Design",
        windowScrollAmount: 200,
      },
      {
        name: "Advertising Design",
        to: "/Advertising Design",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "Website Development",
    features: [
      {
        name: "CMS development using WordPress, Shopify, and Wix",
        to: "/CMS development using WordPress, Shopify, and Wix",
        windowScrollAmount: 0,
      },
      {
        name: "React js development",
        to: "/React js development",
        windowScrollAmount: 100,
      },
      {
        name: "Full Stack Development",
        to: "/Full Stack Development",
        windowScrollAmount: 200,
      },
      {
        name: "Php/node js development",
        to: "/Php/node js development",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "Pay Per Click Advertising",
    features: [
      {
        name: "Google Ads",
        to: "/Google Ads",
        windowScrollAmount: 0,
      },
      {
        name: "Meta Ads",
        to: "/Meta Ads",
        windowScrollAmount: 100,
      },
      {
        name: "E-commerce Ads",
        to: "/E-commerce Ads",
        windowScrollAmount: 200,
      },
      {
        name: "Remarketing Ads",
        to: "/Remarketing Ads",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "UI/UX Design & Prototype",
    features: [
      {
        name: "Custom Web Design",
        to: "/Custom Web Design",
        windowScrollAmount: 0,
      },
      {
        name: "Mobile App Design",
        to: "/Mobile App Design",
        windowScrollAmount: 100,
      },
      {
        name: "Product Design",
        to: "/Product Design",
        windowScrollAmount: 200,
      },
      {
        name: "Branding & Graphics",
        to: "/Branding & Graphics",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "Social Media Management",
    features: [
      {
        name: "Strategy with Content Creation",
        to: "/Strategy with Content Creation",
        windowScrollAmount: 0,
      },
      {
        name: "Social Media posting",
        to: "/Social Media posting",
        windowScrollAmount: 100,
      },
      {
        name: "Community Management",
        to: "/Community Management",
        windowScrollAmount: 200,
      },
      {
        name: "Performance Optimization",
        to: "/Performance Optimization",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "Animation & Video Editing",
    features: [
      {
        name: "2D Animation",
        to: "/2D Animation",
        windowScrollAmount: 0,
      },
      {
        name: "3D Animation",
        to: "/3D Animation",
        windowScrollAmount: 100,
      },
      {
        name: "E-learning Animation",
        to: "/E-learning Animation",
        windowScrollAmount: 200,
      },
      {
        name: "Corporate Video Editing",
        to: "/Corporate Video Editing",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "Website Development",
    features: [
      {
        name: "CMS development using WordPress, Shopify, and Wix",
        to: "/CMS development using WordPress, Shopify, and Wix",
        windowScrollAmount: 0,
      },
      {
        name: "React js development",
        to: "/React js development",
        windowScrollAmount: 100,
      },
      {
        name: "Full Stack Development",
        to: "/Full Stack Development",
        windowScrollAmount: 200,
      },
      {
        name: "Php/node js development",
        to: "/Php/node js development",
        windowScrollAmount: 300,
      },
    ],
  },
];
const resources = [
  {
    title: "Portfolio",
    to: "/Portfolio",
    windowScrollAmount: 100,
  },
  {
    title: "Careers",
    to: "/Career",
    windowScrollAmount: 200,
  },
  {
    title: "Blog",
    to: "/Blog",
    windowScrollAmount: 300,
  },
  {
    title: "Faq",
    to: "/Faq",
    windowScrollAmount: 400,
  },
];
const index = [
  {
    title: "SEO Company INDIA",
    to: "/SEO/India",
    windowScrollAmount: 100,
  },
  {
    title: "SEO Company Jaipur",
    to: "/SEO/Jaipur",
    windowScrollAmount: 200,
  },
  {
    title: "SEO Company Delhi",
    to: "/SEO/Delhi",
    windowScrollAmount: 300,
  },
  {
    title: "SEO Company Bangalore",
    to: "/SEO/Bangalore",
    windowScrollAmount: 400,
  },
  {
    title: "SEO Company Gurgaon",
    to: "/SEO/Gurgaon",
    windowScrollAmount: 500,
  },
  {
    title: "SEO Company Mumbai",
    to: "/SEO/Mumbai",
    windowScrollAmount: 600,
  },
  {
    title: "SEO Company Noida",
    to: "/SEO/Noida",
    windowScrollAmount: 700,
  },
  {
    title: "SEO Company Pune",
    to: "/SEO/Pune",
    windowScrollAmount: 800,
  },
  {
    title: "SEO Company Surat",
    to: "/SEO/Surat",
    windowScrollAmount: 900,
  },
];
const Nav = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  useEffect(() => {
    setHoveredTitle(services[0]?.title);
  }, []);
  const [popoverState, setPopoverState] = useState({});
  const [menuClick, setMenuClick] = useState(false);

  const handleClick = () => {
    setMenuClick(!menuClick);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuContainer = document.getElementById("menu-container");
      if (menuContainer && !menuContainer.contains(event.target)) {
        setMenuClick(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (linkId) => {
    setPopoverState((prevState) => ({
      ...prevState,
      [linkId]: true,
    }));
  };

  const handleMouseLeave = (linkId) => {
    setPopoverState((prevState) => ({
      ...prevState,
      [linkId]: false,
    }));
  };
  const isPopoverOpen = (linkId) => Boolean(popoverState[linkId]);
  return (
    <>
      {/* for Desktop view */}

      <Stack position={"relative"} p={"0px 90px"} pt={1}>
        <Stack
          height={"80px"}
          zIndex={11}
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
          }}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          backgroundColor={"transparent"}
        >
          <Stack width={{ xxl: "10%", xl: "13%", md: "20%", sm: "25%" }}>
            <Link to={"/"}>
              <img src={lo} alt="" style={{ width: "100%", height: "100%" }} />
            </Link>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            alignSelf={"center"}
            height={"100%"}
          >
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignContent="center"
              gap={5}
              pl={3}
              sx={{ color: "white", height: "100%", paddingRight: 4 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
                className="navlink-box"
              >
                <Box>
                  <Link to="#" className="navlink-link">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        fontsize={"12px"}
                        color={"white"}
                        alignSelf="center"
                        display="inline-block"
                        className="navlink"
                        height={"100%"}
                        sx={{
                          transition: "all 0.4s ease-in",
                          "&:hover": {
                            color: "#0D6EFD",
                          },
                          //   color: isPopoverOpen(1) ? "white" : "black",
                        }}
                      >
                        Services
                      </Typography>
                      <ArrowDropDownIcon
                        className="navlink-link-downarrow"
                        sx={{
                          fontSize: 25,
                          transition: "all 0.3s ease-in",
                          color: "white",
                          transform: isPopoverOpen(1)
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        }}
                      />
                    </Box>
                  </Link>
                  <Stack
                    color={"black"}
                    flexDirection={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                    sx={{
                      width: isPopoverOpen(1) ? "100vw" : 0,
                      opacity: isPopoverOpen(1) ? 1 : 0,
                      transition:
                        "height 0.2s ease-in, opacity 0.2s ease-in-out",
                      overflow: "hidden",
                      position: "absolute",
                      backgroundColor: "transparent",
                      left: 0,
                      top: "100%",
                      zIndex: 1,
                    }}
                  >
                    <Stack direction={"row"} width={"100%"}>
                      <Stack
                        color={"lightpurple"}
                        width={"75%"}
                        backgroundColor={"#DEE0FE"}
                        alignItems={"center"}
                      >
                        <Stack
                          direction={"row"}
                          gap={3}
                          justifyContent={"center"}
                        >
                          <Stack width={"25%"} pl={"5%"} pb={3}>
                            <Typography pt={3} pb={1} fontWeight={"bold"}>
                              Solutions
                            </Typography>
                            <Stack>
                              {services.map((service, index) => (
                                <Typography
                                  pt={1}
                                  pb={1}
                                  key={index}
                                  sx={{
                                    "&:hover": {
                                      color: "#0D6EFD",
                                      cursor: "pointer",
                                    },
                                  }}
                                  onMouseEnter={() =>
                                    setHoveredTitle(service.title)
                                  }
                                >
                                  {service.title}
                                </Typography>
                              ))}
                            </Stack>
                          </Stack>
                          <Stack width={"50%"}>
                            <Typography pt={3} fontWeight={"bold"}>
                              Industry Focus
                            </Typography>
                            <Stack
                              direction={"row"}
                              flexWrap={"wrap"}
                              justifyContent={"center"}
                              gap={3}
                              p={4}
                              height={"100%"}
                            >
                              {/* Render features based on hoveredTitle */}
                              {hoveredTitle &&
                                services
                                  .find(
                                    (service) => service.title === hoveredTitle
                                  )
                                  ?.features.map((feature, index) => (
                                    <Stack
                                      key={index}
                                      width={"190px"}
                                      height={"100px"}
                                      p={2}
                                      alignItems={"center"}
                                      justifyContent={"center"}
                                      borderRadius={3}
                                      backgroundColor={"white"}
                                      border={"2px solid gray"}
                                    >
                                      <Typography textAlign={"center"}>
                                        {feature.name}
                                      </Typography>
                                    </Stack>
                                  ))}
                            </Stack>
                          </Stack>
                        </Stack>
                      </Stack>
                      <Stack width={"25%"} bgcolor={"white"}>
                        <Stack
                          p={3}
                          boxSizing={"border-box"}
                          gap={3}
                          width={"80%"}
                        >
                          <Typography fontWeight={"bold"}>
                            Featured Case Studies
                          </Typography>
                          <Stack>
                            <Typography>
                              Segmenting Your Customers for Greater Digital
                              Marketing
                            </Typography>
                            <Box
                              mt={1}
                              width={"100%"}
                              height={"1px"}
                              backgroundColor={"lightgray"}
                            />
                          </Stack>
                          <Stack>
                            <Typography>
                              How to Improve Your Site SEO Rankings
                            </Typography>
                            <Box
                              mt={1}
                              width={"100%"}
                              height={"1px"}
                              backgroundColor={"lightgray"}
                            />
                          </Stack>
                          <Stack>
                            <Typography>
                              How to Secure and Optimize Your App’s Online
                              Visibility
                            </Typography>
                            <Box
                              mt={1}
                              width={"100%"}
                              height={"1px"}
                              backgroundColor={"lightgray"}
                            />
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </div>
              {/* //!our Story */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Link to="#" className="navlink-link">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        alignSelf="center"
                        display="inline-block"
                        fontsize={"12px"}
                        color={"white"}
                        sx={{
                          transition: "all 0.4s ease-in",
                          "&:hover": {
                            color: "#0D6EFD",
                          },
                          //   color: isPopoverOpen(2) ? "white" : "black",
                        }}
                      >
                        About Us
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </div>

              {/* //!Industries */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <Link to="#" className="navlink-link">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        alignSelf="center"
                        display="inline-block"
                        fontsize={"12px"}
                        color={"white"}
                        sx={{
                          transition: "all 0.4s ease-in",
                          "&:hover": {
                            color: "#0D6EFD",
                          },
                          //   color: isPopoverOpen(3) ? "white" : "black",
                        }}
                      >
                        Industries
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Link to="#" className="navlink-link">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        alignSelf="center"
                        display="inline-block"
                        fontsize={"12px"}
                        color={"white"}
                        sx={{
                          transition: "all 0.4s ease-in",
                          "&:hover": {
                            color: "#0D6EFD",
                          },
                        }}
                      >
                        Case Studies
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={() => handleMouseLeave(4)}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Link to="#" className="navlink-link">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        alignSelf="center"
                        display="inline-block"
                        fontsize={"12px"}
                        color={"white"}
                        sx={{
                          transition: "all 0.4s ease-in",
                          "&:hover": {
                            color: "#0D6EFD",
                          },
                        }}
                      >
                        Resources
                      </Typography>
                      <ArrowDropDownIcon
                        className="navlink-link-downarrow"
                        sx={{
                          fontSize: 25,
                          transition: "all 0.3s ease-in",
                          color: "white",
                          transform: isPopoverOpen(4)
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        }}
                      />
                    </Box>
                  </Link>

                  <Stack
                    flexDirection={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    backgroundColor={"transparent"}
                    sx={{
                      height: isPopoverOpen(4) ? 400 : 0,
                      opacity: isPopoverOpen(4) ? 1 : 0,
                      transition:
                        "height 0.2s ease-in, opacity 0.2s ease-in-out",
                      position: "absolute",
                      overflow: "hidden",
                      zIndex: 1,
                      left: 0,
                    }}
                  >
                    <Stack width={"400px"} position={"relative"}>
                      <Stack width={"200px"} backgroundColor={"#F4F4F4"}>
                        <Link to="#" style={{ textDecoration: "none" }}>
                          <Stack
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={() => handleMouseLeave(5)}
                          >
                            <Typography
                              color={"black"}
                              padding={"20px"}
                              mt={"10px"}
                              position={"relative"}
                              sx={{
                                "&:hover": {
                                  cursor: "pointer",
                                  backgroundColor: "white",
                                },
                              }}
                            >
                              Index
                              <KeyboardArrowDownIcon
                                style={{
                                  position: "absolute",
                                  right: "20px",
                                }}
                              />
                            </Typography>
                          </Stack>

                          <Stack
                            flexDirection={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={() => handleMouseLeave(5)}
                            backgroundColor={"#F4F4F4"}
                            sx={{
                              // height: isPopoverOpen(5) ? 400 : 0,
                              height: isPopoverOpen(5) ? "300px" : 0,
                              width: isPopoverOpen(5) ? 200 : 0,
                              opacity: isPopoverOpen(5) ? 1 : 0,
                              // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                              transition:
                                "height 0.2s ease-in, opacity 0.2s ease-in-out",
                              position: "absolute",
                              overflow: "hidden",
                              zIndex: 1,
                              right: 0,
                              top: 0,
                            }}
                          >
                            <Stack>
                              {index.map((resource, index) => (
                                <Link
                                  key={index}
                                  to={resource.to}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Typography
                                    color={"black"}
                                    padding={"20px"}
                                    mt={"10px"}
                                    sx={{
                                      "&:hover": {
                                        cursor: "pointer",
                                        backgroundColor: "white",
                                      },
                                    }}
                                  >
                                    {resource.title}
                                  </Typography>
                                </Link>
                              ))}
                            </Stack>
                          </Stack>
                        </Link>
                        {resources.map((resource, index) => (
                          <Link
                            key={index}
                            to={resource.to}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              color={"black"}
                              padding={"20px"}
                              mt={"10px"}
                              sx={{
                                "&:hover": {
                                  cursor: "pointer",
                                  backgroundColor: "white",
                                },
                              }}
                            >
                              {resource.title}
                            </Typography>
                          </Link>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </div>
            </Stack>
          </Stack>
          <Link
            to="#"
            style={{
              textDecoration: "none",
            }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              width={"140px"}
              height={"40px"}
              border={"2px solid white"}
              backgroundColor={"#0D6EFD"}
              sx={{
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <Typography color={"white"}>Get In Touch</Typography>
            </Stack>
          </Link>
        </Stack>
      </Stack>

      {/* for Mobile view */}
      <Stack
        m={"0 auto"}
        alignItems={"end"}
        width={"100%"}
        sx={{
          display: {
            xs: "flex",
            lg: "none",
          },
        }}
        zIndex={1000}
      >
        <Stack
          width={"90%"}
          direction={"row"}
          alignSelf={"center"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"20px 0px"}
        >
          <Stack width={{ xs: "45%", md: "30%" }}>
            <Link to={"/"}>
              <img src={lo} alt="" width={"100%"} height={"100%"} />
            </Link>
          </Stack>
          <Stack
            onClick={handleClick}
            width={"32px"}
            height={"32px"}
            sx={{
              display: {
                xs: "block",
                lg: "none",
              },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            {menuClick ? (
              <RxCross2
                style={{ color: "#052973", width: "32px", height: "32px" }}
              />
            ) : (
              <CgMenuRight
                style={{ color: "#052973", width: "32px", height: "32px" }}
              />
            )}
          </Stack>
        </Stack>

        <Stack
          id="menu-container"
          height={"100dvh"}
          width={"100%"}
          position={"fixed"}
          gap={2}
          sx={{
            top: 0,
            // bottom: 0,
            left: menuClick ? "0" : "-100%",
            // right: menuClick ? "0" : "-100%",

            transition: "all 0.2s ease-in",
            backgroundColor: "white",
            zIndex: "1000001",
          }}
        >
          <Stack
            margin={"10px auto"}
            width={"100%"}
            height={"40px"}
            direction={"row"}
            justifyContent={"end"}
          >
            <Stack
              onClick={handleClick}
              width={"32px"}
              height={"32px"}
              marginRight={"20px"}
              marginTop={"15px"}
              sx={{
                display: {
                  xs: "block",
                  lg: "none",
                },
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {menuClick ? (
                <RxCross2
                  style={{ color: "#052973", width: "32px", height: "32px" }}
                />
              ) : (
                <CgMenuRight
                  style={{ color: "#052973", width: "32px", height: "32px" }}
                />
              )}
            </Stack>
          </Stack>
          <Accordion
            sx={{
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              <Typography>
                {" "}
                <Link to="/Features" className="navlink-link">
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      className="navlink"
                      sx={{
                        transition: "all 0.4s ease-in",
                      }}
                    >
                      Features
                    </Typography>
                  </Box>
                </Link>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack justifyContent={"center"} gap={1} marginLeft={"20px"}>
                <Link to="/Features/Billing" className="popperLinks">
                  <Typography sx={{}}>Billing Management</Typography>
                </Link>
                <Link to="/Features/Billing" className="popperLinks">
                  <Typography sx={{}}>Billing Management</Typography>
                </Link>
                <Link to="/Features/Billing" className="popperLinks">
                  <Typography sx={{}}>Billing Management</Typography>
                </Link>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                {" "}
                <Link to="/Solutions" className="navlink-link">
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      className="navlink"
                      sx={{
                        transition: "all 0.4s ease-in",
                      }}
                    >
                      Solutions
                    </Typography>
                  </Box>
                </Link>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack justifyContent={"center"} gap={1} marginLeft={"20px"}>
                <Link to="/Solutions/By-Industries" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    By Industries
                  </Typography>
                </Link>
                <Link to="/Solutions/By-Size" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    By Size
                  </Typography>
                </Link>
                <Link to="/Solutions/By-role" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    By Role
                  </Typography>
                </Link>
                <Link to="/Solutions/By-usecases" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    By use cases
                  </Typography>
                </Link>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                {" "}
                <Link to="/Resources" className="navlink-link">
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      fontFamily={"Work Sans"}
                      className="navlink"
                      sx={{
                        transition: "all 0.4s ease-in",
                      }}
                    >
                      Resources
                    </Typography>
                  </Box>
                </Link>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack justifyContent={"center"} gap={1} marginLeft={"20px"}>
                <Link to="/Resources/BecomeAPartner" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Become A Partner
                  </Typography>
                </Link>
                <Link to="/Resources/Career" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Career
                  </Typography>
                </Link>
                <Link to="/Resources/Blog" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Blogs
                  </Typography>
                </Link>
                <Link to="/Resources/CaseStudy" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Case Study
                  </Typography>
                </Link>
                <Link to="/Resources/Testimonials" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Testimonials
                  </Typography>
                </Link>
                <Link to="/Resources/Videos" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Videos
                  </Typography>
                </Link>
                <Link to="/Resources/faq" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Faq
                  </Typography>
                </Link>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary aria-controls="panel2-content" id="panel2-header">
              <Typography>
                {" "}
                <Link to="/Pricing" className="navlink-link">
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      fontFamily={"Work Sans"}
                      className="navlink"
                      sx={{
                        transition: "all 0.4s ease-in",
                      }}
                    >
                      Pricing
                    </Typography>
                  </Box>
                </Link>
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Stack alignItems={"center"} margin={"10px auto"}>
            <Link to={"/Login"}>
              <Button
                sx={{
                  width: "120px",
                  borderRadius: "10px",
                  height: "5vh",
                  "&:hover": {
                    backgroundColor: "#F15B25",
                    color: "white",
                  },
                }}
              >
                Login
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Nav;
