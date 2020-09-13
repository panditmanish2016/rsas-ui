export class I18NLabel {
  labelId: string;
  labelValue: string;
  labelType: string;
  i18NSubLabelList: I18NSubLabel[];
}

export class I18NSubLabel {
  labelId: string;
  labelValue: string;
  labelType: string;
  socialIcon: string;
}

export class SchoolContent {
  titleId: string;
  title: string;
  subTitle: string;
  description: string;
  mediaType: string;
  image: string;
  youTubeVideoId: string;
}

export class LatestUpdateLink {
  latestUpdateId: string;
  latestUpdate: string;
  updateDescription: string;
  updateType: string;
  priority: string;
  eventDate: string;
  eventMedia: string;
}

export class Gender {
  genderId: string;
  genderValue: string;
}

export class I18NLabelResponse {
  i18NLabelResponse: I18NLabel[];
}

export class FooterGeneralDataResponse {
  FooterGeneralData: I18NSubLabel[];
}
