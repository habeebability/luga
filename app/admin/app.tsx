"use client";

import { Admin, ListGuesser, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";

import { UnitList } from "./unit/list";
import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";

import { LessonList } from "./lesson/list";
import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";

import { ChallengeList } from "./challenge/list";
import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";

import { ChallengeOptionList } from "./challengeOption/list";
import { ChallengeOptionCreate } from "./challengeOption/create";
import { ChallengeOptionEdit } from "./challengeOption/edit";

const dataProvider = simpleRestProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      {/* courses */}
      <Resource
        name="courses"
        recordRepresentation="title"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
      />
      {/* units */}
      <Resource
        name="units"
        recordRepresentation="title"
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
      />
      {/* lessons */}
      <Resource
        name="lessons"
        recordRepresentation="title"
        list={LessonList}
        create={LessonCreate}
        edit={LessonEdit}
      />
      {/* challenge */}
      <Resource
        name="challenges"
        recordRepresentation="question"
        list={ChallengeList}
        create={ChallengeCreate}
        edit={ChallengeEdit}
      />
      {/* challenge option */}
      <Resource
        name="challengeOptions"
        recordRepresentation="text"
        list={ChallengeOptionList}
        create={ChallengeOptionCreate}
        edit={ChallengeOptionEdit}
        options={{
          label: "Challenge Options",
        }}
      />
    </Admin>
  );
};

export default App;
