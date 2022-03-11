import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <section className="kanban__logo">
        <span>TODO</span>
      </section>
    </Link>
  )
}

export default Logo;
