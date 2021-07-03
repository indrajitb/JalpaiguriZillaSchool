import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TableName {
  USER = "User",
  PROFILE = "Profile",
  MEDIA_FILE = "MediaFile",
  POST = "Post",
  COMMENT = "Comment"
}

export enum Role {
  TEACHING_STAFF = "TeachingStaff",
  STUDENT = "Student",
  NON_TEACHING_STAFF = "NonTeachingStaff",
  ALUMNI = "Alumni",
  EX_TEACHING_STAFF = "ExTeachingStaff",
  EX_NON_TEACHING_STAFF = "ExNonTeachingStaff",
  HEADMASTER = "Headmaster",
  ASST_HEAD_MASTER = "AsstHeadMaster",
  ALUMNI_AND_TEACHING_STAFF = "AlumniAndTeachingStaff",
  ALUMNI_AND_NON_TEACHING_STAFF = "AlumniAndNonTeachingStaff",
  ALUMNI_AND_EX_TEACHING_STAFF = "AlumniAndExTeachingStaff",
  ALUMNI_AND_EX_NON_TEACHING_STAFF = "AlumniAndExNonTeachingStaff",
  ADMIN = "Admin"
}

export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class Post {
  readonly id: string;
  readonly type: TableName | keyof typeof TableName;
  readonly userId?: string;
  readonly userEmail: string;
  readonly user?: User;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly title?: string;
  readonly content?: string;
  readonly files?: (S3Object | null)[];
  readonly comments?: (Comment | null)[];
  readonly likes?: (string | null)[];
  readonly unlikes?: (string | null)[];
  readonly likeCount?: string;
  readonly unlikeCount?: string;
  readonly owner?: string;
  readonly userPostsId?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class User {
  readonly id: string;
  readonly type: TableName | keyof typeof TableName;
  readonly name: string;
  readonly email: string;
  readonly userOwnerId?: string;
  readonly userOwnerName?: string;
  readonly accountConfirmed?: boolean;
  readonly createdAt?: string;
  readonly profile?: Profile;
  readonly profileCreated?: boolean;
  readonly mediaFiles?: (MediaFile | null)[];
  readonly posts?: (Post | null)[];
  readonly comments?: (Comment | null)[];
  readonly owner?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Profile {
  readonly id: string;
  readonly type: TableName | keyof typeof TableName;
  readonly userId: string;
  readonly classRoom?: string;
  readonly userEmail: string;
  readonly classRoomYear?: string;
  readonly schoolLeavingYear?: string;
  readonly year?: string;
  readonly role: Role | keyof typeof Role;
  readonly roleInteger: number;
  readonly profileOwnerId?: string;
  readonly profileOwnerName?: string;
  readonly user?: User;
  readonly owner?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Profile>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

export declare class MediaFile {
  readonly id: string;
  readonly type: TableName | keyof typeof TableName;
  readonly userId?: string;
  readonly userEmail: string;
  readonly user?: User;
  readonly file: (S3Object | null)[];
  readonly createdAt: string;
  readonly owner?: string;
  readonly updatedAt?: string;
  readonly userMediaFilesId?: string;
  constructor(init: ModelInit<MediaFile>);
  static copyOf(source: MediaFile, mutator: (draft: MutableModel<MediaFile>) => MutableModel<MediaFile> | void): MediaFile;
}

export declare class Comment {
  readonly id: string;
  readonly type: TableName | keyof typeof TableName;
  readonly postId: string;
  readonly userId?: string;
  readonly userEmail: string;
  readonly content?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly likes?: (string | null)[];
  readonly unlikes?: (string | null)[];
  readonly likeCount?: string;
  readonly unlikeCount?: string;
  readonly user?: User;
  readonly post?: Post;
  readonly owner?: string;
  readonly userCommentsId?: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

export declare class CarouselData {
  readonly id: string;
  readonly file: (S3Object | null)[];
  readonly createdAt: string;
  readonly owner?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CarouselData>);
  static copyOf(source: CarouselData, mutator: (draft: MutableModel<CarouselData>) => MutableModel<CarouselData> | void): CarouselData;
}