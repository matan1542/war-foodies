import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { THEME_COLORS } from "@/constants";
import { Item } from "@/types/api";
import FoodItem from "../FoodItem";
import { TransformedCategory } from "@/types/ui";

interface Props {
  category: TransformedCategory;
  items: Item[];
}

const FoodCatagory = ({ category }: Props) => {
  return (
    <Box
      sx={{
        "&": {
          marginBottom: "20px",
          "&.Mui-expanded": {
            marginBottom: "20px !important",
          },
        },
        "&:last-child": {
          marginBottom: "0px",
        },
      }}
    >
      <Accordion
        elevation={0}
        disableGutters
        sx={{
          boxShadow: "0px 20px 50px 0px #0000001F",

          border: "1px solid #D3D3D3",
          borderRadius: "8px",
          // "&:last-of-type": {
          //   marginBottom: "0px",
          // },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary" fontSize={"large"} />}
          sx={{
            marginBlock: "22px",
            paddingInline: "30px",
          }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            color={THEME_COLORS.primary}
            fontWeight={700}
            fontSize={32}
          >
            {category.heName}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            paddingInline: "30px",
            paddingTop: "0px",
            paddingBottom: "10px",
          }}
        >
          {Object.entries(category.itemsAndAmounts).map(
            ([id, { item, amounts }]) => {
              return <FoodItem key={item.id} amounts={amounts} item={item} />;
            }
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FoodCatagory;
