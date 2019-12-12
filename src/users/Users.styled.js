import styled from "styled-components";
import { Icon as _Icon } from "antd";

export const HGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const VGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const VSpacer = styled.div`
  width: 100%;
  height: ${props => props.size || "20px"};
`;

export const HSpacer = styled.span`
  height: 1px;
  width: ${props => props.size || "20px"};
`;

export const UserList = styled.div`
  margin-left: 5px;
  margin-top: 5px;
  width: 700px;
`;

export const Bio = styled.div`
  width: 100%;
  font-size: 12px;
`;

export const Login = styled.a`
  text-decoration: none;
`;

export const Location = styled.span`
  opacity: 0.5;
  font-size: 12px;
`;

export const Icon = styled(_Icon)`
  margin-top: 3px;
  color: grey !important;
`;
