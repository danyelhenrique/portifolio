import React from "react";

import { FaQuestion } from "react-icons/fa";

import { People, Person } from "./styles";

import monica from "../../../assets/images/monica.jpg";

export default function PeopleContainer() {
  return (
    <People>
      <Person>
        <div>
          <FaQuestion size={34} />
          <img src={monica} />
        </div>
      </Person>

      <Person>
        <div>
          <FaQuestion size={34} />
        </div>
      </Person>

      <Person>
        <div>
          <FaQuestion size={34} />
        </div>
      </Person>

      <Person>
        <div>
          <FaQuestion size={34} />
        </div>
      </Person>

      <Person>
        <div>
          <FaQuestion size={34} />
        </div>
      </Person>

      <Person>
        <div>
          <FaQuestion size={34} />
        </div>
      </Person>

      <Person>
        <div>
          <FaQuestion size={34} />
        </div>
      </Person>

      <Person>
        <div>
          <FaQuestion size={34} />
        </div>
      </Person>
    </People>
  );
}
