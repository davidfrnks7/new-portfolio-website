import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      contactPrimary: {
        bg: "rgba(255, 255, 255, .15)",
        fontSize: "xl"
      },
      contactSecondary: {
        bg: "brand.primary",
        fontSize: "xl",
        p: "4"
      },
      project: {
        bg: "transparent",
        fontSize: "md",
        py: 2,
        px: 4,
        boxShadow:
          "rgba(0, 134, 255, 0.2) 0px 0px 15px, rgba(0, 134, 255, 0.15) 0px 0px 3px 1px",
        border: "1px solid rgba(0, 134, 255, 0.4)"
      },
      credits: {
        bg: "brand.main",
        fontSize: "lg",
        p: 3,
        color: "whiteAlpha"
      },
      collapse: {
        bg: "transparent",
        fontSize: "md",
        p: 2,
        h: 8,
        color: "brand.hover",
        textDecoration: "underline"
      },
      nav: {
        bg: "transparent",
        fontSize: "lg",
        fontWeight: "semibold",
        px: "2"
      }
    }
  }
});
