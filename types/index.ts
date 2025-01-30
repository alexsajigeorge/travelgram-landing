import React from "react";

export type ButtonProps = {
  type?: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  formAction?: () => void;
};

export interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

export type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

export type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};
