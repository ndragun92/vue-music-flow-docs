export type TNpmRegistry = {
  _id: string;
  _rev: string;
  name: string;
  "dist-tags": {
    latest: string;
  };
  versions: {
    [version: string]: VersionDetails;
  };
  time: {
    created: string;
    modified: string;
    [version: string]: string;
  };
  bugs: {
    url: string;
  };
  author: {
    name: string;
    email: string;
    url: string;
  };
  license: string;
  homepage: string;
  keywords: string[];
  repository: {
    type: string;
    url: string;
  };
  description: string;
  maintainers: {
    name: string;
    email: string;
  }[];
  readme?: string;
  readmeFilename?: string;
};

type VersionDetails = {
  name: string;
  version: string;
  keywords: string[];
  author: {
    url: string;
    name: string;
    email: string;
  };
  license: string;
  _id: string;
  maintainers: {
    name: string;
    email: string;
  }[];
  homepage: string;
  bugs: {
    url: string;
  };
  dist: {
    shasum: string;
    tarball: string;
    fileCount: number;
    integrity: string;
    signatures: {
      sig: string;
      keyid: string;
    }[];
    unpackedSize: number;
  };
  main: string;
  type: string;
  types: string;
  module: string;
  gitHead: string;
  private: boolean;
  scripts: {
    [script: string]: string;
  };
  _npmUser: {
    name: string;
    email: string;
  };
  repository: {
    url: string;
    type: string;
  };
  _npmVersion: string;
  description: string;
  directories: object;
  _nodeVersion: string;
  dependencies: {
    [dependency: string]: string;
  };
  _hasShrinkwrap: boolean;
  devDependencies: {
    [dependency: string]: string;
  };
  peerDependencies?: {
    [dependency: string]: string;
  };
  _npmOperationalInternal: {
    tmp: string;
    host: string;
  };
};
