// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TableName = {
  "USER": "User",
  "PROFILE": "Profile",
  "MEDIA_FILE": "MediaFile",
  "POST": "Post",
  "COMMENT": "Comment"
};

const Role = {
  "TEACHING_STAFF": "TeachingStaff",
  "STUDENT": "Student",
  "NON_TEACHING_STAFF": "NonTeachingStaff",
  "ALUMNI": "Alumni",
  "EX_TEACHING_STAFF": "ExTeachingStaff",
  "EX_NON_TEACHING_STAFF": "ExNonTeachingStaff",
  "HEADMASTER": "Headmaster",
  "ASST_HEAD_MASTER": "AsstHeadMaster",
  "ALUMNI_AND_TEACHING_STAFF": "AlumniAndTeachingStaff",
  "ALUMNI_AND_NON_TEACHING_STAFF": "AlumniAndNonTeachingStaff",
  "ALUMNI_AND_EX_TEACHING_STAFF": "AlumniAndExTeachingStaff",
  "ALUMNI_AND_EX_NON_TEACHING_STAFF": "AlumniAndExNonTeachingStaff",
  "ADMIN": "Admin"
};

const { Post, User, Profile, MediaFile, Comment, CarouselData, S3Object } = initSchema(schema);

export {
  Post,
  User,
  Profile,
  MediaFile,
  Comment,
  CarouselData,
  TableName,
  Role,
  S3Object
};