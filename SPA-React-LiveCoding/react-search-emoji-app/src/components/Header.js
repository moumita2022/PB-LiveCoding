import React from "react";
import GithubButton from "react-github-btn";

export default function Header() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Search Emoji App 🦄</h1>
      <p>Simple tool to search emoji with ReactJS</p>
      <GithubButton href="https://github.com/nrcool" data-size="large" data-icon="octicon-star" data-show-count={true}>
        Star
      </GithubButton>
      <GithubButton href="https://github.com/nrcool" data-size="large"
      data-icon="octicon-repo-forked" data-show-count={true}>
        Forked
      </GithubButton>
    </div>
  );
}
