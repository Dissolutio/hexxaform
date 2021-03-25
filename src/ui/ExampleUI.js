import React from "react";
import { Chat } from "./Chat";
import { Controls } from "./Controls";
import { Layout } from "./styled/Layout";

export const ExampleUI = () => {
  return (
    <Layout>
      <h1>MAP GOES HERE :)</h1>
      <Controls />
      <Chat />
    </Layout>
  );
};
