import React, { useState } from "react";
import styled from "styled-components";

const Sidebar = (props) => {
  const { data } = props;
  const [hide, setHide] = useState({});
  return (
    <Container>
      <ul>
        {data.map((item) => {
          return (
            <li
              key={item.id}
              onClick={(e) => {
                e?.stopPropagation();
                setHide((prev) => ({ ...prev, [item.id]: !prev?.[item?.id] }))
              }}
            >
              {item?.name};
              {!hide[item.id] && item?.children?.length && <Sidebar data={item?.children} />}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  ul {
    width: max-content;
  }
  li {
    width: max-content;
  }
`;
