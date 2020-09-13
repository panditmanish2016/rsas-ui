import { Component, OnInit } from '@angular/core';
import { I18NLabel, I18NSubLabel, SchoolContent, LatestUpdateLink } from 'src/app/utility/utility.shared';
import { CustomRouterService } from 'src/app/utility/custom-router.service';
import { NAVIGATION_URL } from 'src/app/utility/navigation.shared';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  navItemList: I18NLabel[];
  navItemSubList: I18NSubLabel[];
  footerGeneralDataList: I18NSubLabel[];
  carosuselGeneralDataList: I18NSubLabel[];
  carosuselStaffDataList: I18NSubLabel[];
  schoolContentGeneralDataList: SchoolContent[];
  latestUpadteLinkGeneralDataList: LatestUpdateLink[];
  constructor(private customRouterService: CustomRouterService) {
  }

  ngOnInit() {
    this.getNavItemList();
    this.getFooterGeneralData();
    this.getCarosuselGeneralDataList();
    this.getCarosuselStaffDataList();
    this.getSchoolContentGenralDataList();
    this.getLatestUpadteLinkGeneralDataList();
  }

  /* creating a array of nav link items  */
  getNavItemList() {
    this.navItemList = new Array();
    this.navItemList.push({
      labelId: 'home', labelValue: 'HOME', labelType: 'title',
      i18NSubLabelList: this.getNavItemSubList('home')
    });
    this.navItemList.push({
      labelId: 'ourSchool', labelValue: 'OUR SCHOOL', labelType: 'title',
      i18NSubLabelList: this.getNavItemSubList('ourSchool')
    });
    this.navItemList.push({
      labelId: 'academics', labelValue: 'ACADEMICS', labelType: 'title',
      i18NSubLabelList: this.getNavItemSubList('academics')
    });
    this.navItemList.push({
      labelId: 'admission', labelValue: 'ADMISSION', labelType: 'title',
      i18NSubLabelList: this.getNavItemSubList('admission')
    });
    this.navItemList.push({
      labelId: 'eventAndNews', labelValue: 'EVENTS & NEWS', labelType: 'title',
      i18NSubLabelList: this.getNavItemSubList('eventAndNews')
    });
    this.navItemList.push({
      labelId: 'contact', labelValue: 'CONTACT', labelType: 'title',
      i18NSubLabelList: this.getNavItemSubList('contact')
    });
    this.navItemList.push({
      labelId: 'account', labelValue: 'ACCOUNT', labelType: 'title',
      i18NSubLabelList: this.getNavItemSubList('account')
    });
  }

  getNavItemSubList(labelId: string): I18NSubLabel[] {
    this.navItemSubList = new Array();
    if (labelId === 'admission') {
      this.navItemSubList.push({ labelId: 'offlineAdmission', labelValue: 'Offline Admission', labelType: 'link', socialIcon: '' });
      this.navItemSubList.push({ labelId: 'onlineAdmission', labelValue: 'Online Admission', labelType: 'link', socialIcon: '' });
    }
    if (labelId === 'account') {
      this.navItemSubList.push({ labelId: 'studentLogin', labelValue: 'Student Login', labelType: 'link', socialIcon: '' });
      this.navItemSubList.push({ labelId: 'staffLogin', labelValue: 'Staff Login', labelType: 'link', socialIcon: '' });
      this.navItemSubList.push({ labelId: 'adminLogin', labelValue: 'Admin Login', labelType: 'link', socialIcon: '' });
    }
    if (labelId === 'academics') {
      this.navItemSubList.push({ labelId: 'scienceStream', labelValue: 'Science Stream', labelType: 'link', socialIcon: '' });
      this.navItemSubList.push({ labelId: 'artsStream', labelValue: 'Arts Stream', labelType: 'link', socialIcon: '' });
      this.navItemSubList.push({ labelId: 'commerceStream', labelValue: 'Commerce Stream', labelType: 'link', socialIcon: '' });
    }
    if (labelId === 'ourSchool') {
      this.navItemSubList.push({ labelId: 'alumni', labelValue: 'Alumni', labelType: 'link', socialIcon: '' });
      this.navItemSubList.push({ labelId: 'pioneerInSchool', labelValue: 'Pioneer in School', labelType: 'link', socialIcon: '' });
    }
    return this.navItemSubList;
  }

  getFooterGeneralData() {
    this.footerGeneralDataList = new Array();
    this.footerGeneralDataList.push({
      labelId: 'addressPlaceholder',
      labelValue: 'r. s. a. s. high school, Ballialakhminia-III, Ballia Bazar P.O.:- Lakhminia Disst:- Begusarai Bihar 851211',
      labelType: 'address', socialIcon: 'placeholder'
    });
    this.footerGeneralDataList.push({
      labelId: 'phone',
      labelValue: 'Phone: 072818 73755',
      labelType: 'address', socialIcon: 'call'
    });
    this.footerGeneralDataList.push({
      labelId: 'email',
      labelValue: 'rsasballia@gmail.com',
      labelType: 'address', socialIcon: 'mail'
    });
    this.footerGeneralDataList.push({
      labelId: 'facebookIcon',
      labelValue: 'FacebooK',
      labelType: 'socialIcon', socialIcon: 'facebook'
    });
    this.footerGeneralDataList.push({
      labelId: 'twitterIcon',
      labelValue: 'Twitter',
      labelType: 'socialIcon', socialIcon: 'twitter'
    });
    this.footerGeneralDataList.push({
      labelId: 'instagramIcon',
      labelValue: 'Instagram',
      labelType: 'socialIcon', socialIcon: 'instagram'
    });
  }

  getCarosuselGeneralDataList() {
    this.carosuselGeneralDataList = new Array();
    this.carosuselGeneralDataList.push({
      labelId: 'campusFront',
      labelValue: 'college front campus show case',
      labelType: 'carousel', socialIcon: 'campusfront'
    });
    this.carosuselGeneralDataList.push({
      labelId: 'groupPhoto',
      labelValue: 'groupphoto in the campus from final year student',
      labelType: 'carousel', socialIcon: 'groupphoto'
    });
    this.carosuselGeneralDataList.push({
      labelId: 'blackBoard',
      labelValue: 'class room teaching live photo',
      labelType: 'carousel', socialIcon: 'blackboard'
    });
    this.carosuselGeneralDataList.push({
      labelId: 'convocation',
      labelValue: 'convocation for the final year student',
      labelType: 'carousel', socialIcon: 'convocation'
    });
  }

  getCarosuselStaffDataList() {
    this.carosuselStaffDataList = new Array();
    this.carosuselStaffDataList.push({
      labelId: 'Suraj Pawar',
      labelValue: `Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
    vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
    magna.`,
      labelType: 'Principal', socialIcon: 'principal'
    });
    this.carosuselStaffDataList.push({
      labelId: 'Reshma Sajay Uthamam',
      labelValue: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
      consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.`,
      labelType: 'Vice Principal', socialIcon: 'vp'
    });
    this.carosuselStaffDataList.push({
      labelId: 'Naveen Prasad Kher',
      labelValue: `Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta
      felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum.`,
      labelType: 'Registrar', socialIcon: 'registrar'
    });
  }

  getSchoolContentGenralDataList() {
    this.schoolContentGeneralDataList = new Array();
    this.schoolContentGeneralDataList.push({
      titleId: 'schoolIntroduction',
      title: 'R S A S high school.',
      subTitle: 'It’s welcoming you.',
      description: `Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
    semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
    commodo.`,
      mediaType: 'image',
      image: 'welcomeschool',
      youTubeVideoId: ''
    });
    this.schoolContentGeneralDataList.push({
      titleId: 'schoolEventIntroduction',
      title: 'Cultural Event at school campus.',
      subTitle: 'Must be seen.',
      description: `Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
    semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
    commodo.`,
      mediaType: 'video',
      image: '',
      youTubeVideoId: 'CVKxfvrjkLg'
    });
  }

  getLatestUpadteLinkGeneralDataList() {
    this.latestUpadteLinkGeneralDataList = new Array();
    this.latestUpadteLinkGeneralDataList.push({
      latestUpdateId: 'duApplicationExtend',
      latestUpdate: `July 04, 2020: DU extends application window for DUET 2020, DU JAT 2020 and DU LLB Entrance Exam 2020
    till July 18, 2020.`,
      updateDescription: '',
      updateType: 'updateAndLink',
      priority: 'New',
      eventDate: '',
      eventMedia: ''
    }
    );
    this.latestUpadteLinkGeneralDataList.push({
      latestUpdateId: 'duRegistrationExtend',
      latestUpdate: `July 02, 2020: Registration to end on July 4; students face difficulty to get disability certificate.`,
      updateDescription: '',
      updateType: 'updateAndLink',
      priority: 'New',
      eventDate: '',
      eventMedia: ''
    }
    );
    this.latestUpadteLinkGeneralDataList.push({
      latestUpdateId: 'duOpenBookExam',
      latestUpdate: `June 29, 2020: DU Open Book Exams 2020 postponed, new dates to be announced on July 3.=`,
      updateDescription: '',
      updateType: 'updateAndLink',
      priority: 'New',
      eventDate: '',
      eventMedia: ''
    }
    );
    this.latestUpadteLinkGeneralDataList.push({
      latestUpdateId: 'duOnlineDocVerification',
      latestUpdate: `June 24, 2020: Delhi University urges school boards to share Class 12 result links for online document
      verification. 18 2020.`,
      updateDescription: '',
      updateType: 'updateAndLink',
      priority: 'New',
      eventDate: '',
      eventMedia: ''
    }
    );
    this.latestUpadteLinkGeneralDataList.push({
      latestUpdateId: 'duShareDocVerification',
      latestUpdate: `June 24, 2020: Delhi University urges school boards to share Class 12 result links for online document
      verification. 18 2020.`,
      updateDescription: '',
      updateType: 'updateAndLink',
      priority: 'New',
      eventDate: '',
      eventMedia: ''
    }
    );

    this.latestUpadteLinkGeneralDataList.push({
      latestUpdateId: 'pythonQuizSeries1',
      latestUpdate: `Python Quiz Series -1`,
      updateDescription: '29th June 2020 onwards',
      updateType: 'updateAndTechEvent',
      priority: 'New',
      eventDate: '29 July 2020',
      eventMedia: 'Python Quiz Series'
    }
    );
    this.latestUpadteLinkGeneralDataList.push({
      latestUpdateId: 'iotWorkshop',
      latestUpdate: `Workshop on IOT New`,
      updateDescription: 'Workshop on Industry based',
      updateType: 'updateAndTechEvent',
      priority: 'New',
      eventDate: '29 July 2020',
      eventMedia: 'CSE_Events_IOT'
    }
    );
    this.latestUpadteLinkGeneralDataList.push({
      latestUpdateId: 'pythonQuizSeries2',
      latestUpdate: `Python Quiz Series -2`,
      updateDescription: '27th July 2020 onwards',
      updateType: 'updateAndTechEvent',
      priority: 'New',
      eventDate: '29 July 2020',
      eventMedia: 'Python Quiz Series2'
    }
    );
    // this.latestUpadteLinkGeneralDataList.push({
    //   latestUpdateId: 'physicsWorkshop',
    //   latestUpdate: `Workshop on Physics -1`,
    //   updateDescription: 'Workshop on Industry based',
    //   updateType: 'updateAndTechEvent',
    //   priority: 'New',
    //   eventDate: '29 July 2020',
    //   eventMedia: 'physics_department'
    // }
    // );
    // this.latestUpadteLinkGeneralDataList.push({
    //   latestUpdateId: 'physicsWorkshop',
    //   latestUpdate: `Workshop on Enterpreneurship`,
    //   updateDescription: '31th July 2020 soon',
    //   updateType: 'updateAndTechEvent',
    //   priority: 'New',
    //   eventDate: '29 July 2020',
    //   eventMedia: 'enterpreneur_lecture'
    // }
    // );
  }

  /* handling method trigerred from navbar component as output event*/
  navItemWasClicked(navItem: any) {
    console.log('clicked nav item is...', navItem);
    if (navItem.labelId.includes('Login')) {
      this.customRouterService.navigateTo(NAVIGATION_URL.loginScreen);
    }
  }

  /* handling method trigerred from latest update component to main component as output event*/
  latestUpadteLinkDataWasClicked(latestUpadteLinkGeneralData: any) {
    console.log('clicked latest update link and event is...', latestUpadteLinkGeneralData);
  }
}
