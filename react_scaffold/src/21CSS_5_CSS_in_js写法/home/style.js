import styled from "styled-components";

const HYButton = styled.button`
  border: 1px solid red;
  border-radius: 5px;
`

export const HYButtonWrapper = styled(HYButton)`
  background-color: #0f0;
  color: #fff;
`

export const HomeWrapper = styled.div`
  .top {
    .banner {
      color: red;
    }
  }

  .bottom {
    .header {
      /* CSS-in-JS使用步骤8-2：使用ThemeProvider通过theme提供的数据：props.theme.xxx */
      color: ${props => props.theme.color};
      font-size: ${props => props.theme.size};
    }

    .product-list {
      .item {
        color: blue;
      }
    }
  }
`
