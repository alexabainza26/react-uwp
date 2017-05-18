import * as React from "react";
import * as PropTypes from "prop-types";

import ElementState from "../ElementState";
import ThemeType from "../styles/ThemeType";
import Icon from "../Icon";

export interface DataProps {
  hoverStyle?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
}

export interface IconButtonProps extends DataProps, React.HTMLAttributes<HTMLButtonElement> {}

export default class IconButton extends React.Component<IconButtonProps, void> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ThemeType };

  render() {
    const { style, hoverStyle, activeStyle, children, ...attributes } = this.props;
    const { theme } = this.context;

    return (
      <ElementState
        {...attributes}
        style={{
          flex: "0 0 auto",
          fontFamily: "Segoe MDL2 Assets",
          transition: "all .25s 0s ease-in-out",
          userSelect: "none",
          background: "none",
          border: "none",
          outline: "none",
          fontSize: 22,
          cursor: "pointer",
          color: theme.baseHigh,
          padding: 4,
          ...style
        }}
        hoverStyle={{
          background: theme[theme.isDarkTheme ? "accentDarker1" : "accentLighter1"],
          ...hoverStyle
        }}
        activeStyle={{
          background: theme.accent,
          ...activeStyle
        }}
      >
        <button {...attributes}>
          <Icon>{children}</Icon>
        </button>
      </ElementState>
    );
  }
}