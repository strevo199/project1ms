/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

import { FC } from "react";
import { Image, ImageProps } from "react-native";

import { imageIconPack, ImageIconPackType } from "./imageIconPack";

const iconSizes =  {
  "logo-iconsize": {
    height: 43,
    width: 43,
  },
  lg: {
    height: 32,
    width: 32,
  },
  m: {
    height: 12,
    width: 12,
  },
  mm: {
    height: 16,
    width: 17,
  },
  md: {
    height: 28,
    width: 28,
  },
  s: {
    height: 4,
    width: 4,
  },
  sml: {
    height: 20,
    width: 20,
  },
  sm: {
    height: 16,
    width: 16,
  },
  xl: {
    height: 48,
    width: 48,
  },
  xll: {
    height: 32,
    width: 99,
  },
  xlll: {
    height: 38,
    width: 140,
  },

  xxl: {
    height: 64,
    width: 64,
  },
  xs: {
    height: 8,
    width: 8,
  },
  xsl: {
    height: 108,
    width: 120,
  },
  pspxl: {
    height: 60,
    width: 71,
  },
  xxxl: {
    height: 138,
    width: 180,
  },
  xxxxl: {
    height: 183,
    width: 177,
  },
}

export type ImageIconProps = {
  name: ImageIconPackType;
  size?: keyof typeof iconSizes;
  source?: ImageProps["source"];
  // Color?: keyof Theme["colors"];
  style?: ImageProps["style"];
  imageProps?: Omit<ImageProps, "source" | "style">;
};




const ImageIcon: FC<ImageIconProps> = props => {
  // Const { name, source, style, imageProps, size = "sm", color } = props;
  const { name, source, style, imageProps,size="sm" } = props;


  const icon = imageIconPack[name];
  const iconSize = iconSizes[size];
  // Const iconColor = color ? theme.colors[color] : undefined;

  return (
    <Image
      fadeDuration={0}
      resizeMode="contain"
      source={source || icon}
      style={[
        {
          ...iconSize,
          // TintColor: iconColor,
        },
        style,
      ]}
      {...imageProps}
    />
  );
};

export { ImageIcon };
