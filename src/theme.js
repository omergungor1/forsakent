"use client";

import theme from "@material-tailwind/react/theme";
import combineMerge from "@material-tailwind/react/utils/combineMerge";
import deepmerge from "deepmerge";

// deepmerge işlemi ve sorunlu alanların düzeltilmesi
deepmerge(theme, {}, { arrayMerge: combineMerge });
theme.rating.defaultProps.ratedIcon = null;
theme.rating.defaultProps.unratedIcon = null;

export default theme;