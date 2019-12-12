import React from "react";
import {
  HGroup,
  VGroup,
  Login,
  VSpacer,
  HSpacer,
  Bio,
  Location,
  Icon
} from "./Users.styled";

export default function User(props) {
  const {
    user: { avatarUrl, bio, email, location, login, name, url, stars }
  } = props;

  return (
    <>
      <HGroup>
        <img alt={`${login}s avatar`} src={avatarUrl} width="42" height="42" />
        <HSpacer size="10px" />
        <VGroup>
          <HGroup>
            <Login target="_blank" href={url}>
              {login}
            </Login>
            <HSpacer size="10px" />
            <span>{name}</span>
          </HGroup>
          <VSpacer size="5px" />
          <Bio>{bio}</Bio>
          <VSpacer size="5px" />
          <HGroup>
            <Icon type="environment" />
            <HSpacer size="3px" />
            <Location>{location}</Location>
            <HSpacer size="10px" />
            {email && <Icon type="mail" />}
            <HSpacer size="3px" />
            <Location>{email}</Location>
            <HSpacer size="3px" />
            {stars && <Icon type="star" />}
            <Location>{stars || ""}</Location>
          </HGroup>
        </VGroup>
      </HGroup>
      <hr />
    </>
  );
}
