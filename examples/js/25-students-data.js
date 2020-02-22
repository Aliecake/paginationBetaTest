/**
 * FSJS project 2 - List Pagination and Filter
 * Example Data file - 25 students - Includes date formatting helper function and array of student objects
 * URL used to get data - https://randomuser.me/api/?results=25&nat=us&exc=id,login,nat,gender,dob,location,phone,cell
 * Data cleaned at - https://www.10bestdesign.com/dirtymarkup/js/
 */

/**
 Format date function - Get date from student object and return short date format
 @param date - Date returned from student object .registered.date
 @return formatted Date string
*/
const formatDate = date => {

	// Format date to add leading zero days and months that are less than 10
	const addZero = n => (n < 10) ? `0${n}` : n;

	// Create new date object or return error message
	const dateObj = (date) ? 
					new Date(date) : 
					console.error(`Problem with date parameter: `, date);

	// New formatted date object
	const shortDate = {
		day: addZero(dateObj.getDate()),
		month: addZero(dateObj.getMonth() + 1),
		year: dateObj.getFullYear().toString().slice(-2)
	};

	// Return formatted date
	return `${shortDate.month}/${shortDate.day}/${shortDate.year}`;
}

// Array of student objects
const data = {
    "results": [{
      "name": {
        "title": "Mr",
        "first": "Samuel",
        "last": "Mason"
      },
      "email": "samuel.mason@example.com",
      "registered": {
        "date": "2018-12-11T05:21:09.477Z",
        "age": 2
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/44.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
      }
    }, {
      "name": {
        "title": "Miss",
        "first": "Roberta",
        "last": "Pena"
      },
      "email": "roberta.pena@example.com",
      "registered": {
        "date": "2004-08-29T15:04:15.179Z",
        "age": 16
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/43.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
      }
    }, {
      "name": {
        "title": "Mrs",
        "first": "Judith",
        "last": "Ramos"
      },
      "email": "judith.ramos@example.com",
      "registered": {
        "date": "2002-10-27T13:26:17.689Z",
        "age": 18
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/73.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
      }
    }, {
      "name": {
        "title": "Mr",
        "first": "Jared",
        "last": "Frazier"
      },
      "email": "jared.frazier@example.com",
      "registered": {
        "date": "2011-02-09T15:39:24.197Z",
        "age": 9
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/58.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
      }
    }, {
      "name": {
        "title": "Mrs",
        "first": "Heidi",
        "last": "Simpson"
      },
      "email": "heidi.simpson@example.com",
      "registered": {
        "date": "2014-08-31T06:55:56.564Z",
        "age": 6
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/41.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
      }
    }, {
      "name": {
        "title": "Mr",
        "first": "Ray",
        "last": "Fletcher"
      },
      "email": "ray.fletcher@example.com",
      "registered": {
        "date": "2006-10-22T08:50:22.560Z",
        "age": 14
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/68.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/68.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg"
      }
    }, {
      "name": {
        "title": "Ms",
        "first": "Kylie",
        "last": "Ray"
      },
      "email": "kylie.ray@example.com",
      "registered": {
        "date": "2004-08-08T14:36:44.001Z",
        "age": 16
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/13.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/13.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/13.jpg"
      }
    }, {
      "name": {
        "title": "Mr",
        "first": "Brennan",
        "last": "Nichols"
      },
      "email": "brennan.nichols@example.com",
      "registered": {
        "date": "2002-03-26T16:16:12.289Z",
        "age": 18
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/6.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/6.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/6.jpg"
      }
    }, {
      "name": {
        "title": "Miss",
        "first": "Sue",
        "last": "Nichols"
      },
      "email": "sue.nichols@example.com",
      "registered": {
        "date": "2014-03-05T16:10:36.531Z",
        "age": 6
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/0.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/0.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/0.jpg"
      }
    }, {
      "name": {
        "title": "Mr",
        "first": "Jared",
        "last": "Henderson"
      },
      "email": "jared.henderson@example.com",
      "registered": {
        "date": "2007-01-12T13:12:58.271Z",
        "age": 13
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/6.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/6.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/6.jpg"
      }
    }, {
      "name": {
        "title": "Mr",
        "first": "Evan",
        "last": "Kim"
      },
      "email": "evan.kim@example.com",
      "registered": {
        "date": "2012-10-07T02:28:06.740Z",
        "age": 8
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/17.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/17.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/17.jpg"
      }
    }, {
      "name": {
        "title": "Mr",
        "first": "Ronald",
        "last": "White"
      },
      "email": "ronald.white@example.com",
      "registered": {
        "date": "2008-03-04T13:55:09.493Z",
        "age": 12
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/53.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/53.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/53.jpg"
      }
    }, {
      "name": {
        "title": "Miss",
        "first": "Yvonne",
        "last": "Butler"
      },
      "email": "yvonne.butler@example.com",
      "registered": {
        "date": "2010-02-07T08:11:13.773Z",
        "age": 10
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/28.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
      }
    }, {
      "name": {
        "title": "Mr",
        "first": "Marvin",
        "last": "Bryant"
      },
      "email": "marvin.bryant@example.com",
      "registered": {
        "date": "2017-05-21T16:04:19.660Z",
        "age": 3
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/77.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/77.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/77.jpg"
      }
    }, {
      "name": {
        "title": "Mr",
        "first": "Robert",
        "last": "Berry"
      },
      "email": "robert.berry@example.com",
      "registered": {
        "date": "2007-01-06T07:30:59.101Z",
        "age": 13
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/50.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/50.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
      }
    }, {
      "name": {
        "title": "Miss",
        "first": "Jane",
        "last": "Watts"
      },
      "email": "jane.watts@example.com",
      "registered": {
        "date": "2004-09-01T04:05:19.822Z",
        "age": 16
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/4.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
      }
    }, {
      "name": {
        "title": "Mr",
        "first": "Thomas",
        "last": "Murray"
      },
      "email": "thomas.murray@example.com",
      "registered": {
        "date": "2003-04-24T05:17:06.022Z",
        "age": 17
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/1.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/1.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/1.jpg"
      }
    }, {
      "name": {
        "title": "Ms",
        "first": "Tiffany",
        "last": "Miles"
      },
      "email": "tiffany.miles@example.com",
      "registered": {
        "date": "2008-11-24T11:29:25.129Z",
        "age": 12
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/38.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/38.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
      }
    }, {
      "name": {
        "title": "Mr",
        "first": "Chester",
        "last": "Collins"
      },
      "email": "chester.collins@example.com",
      "registered": {
        "date": "2019-04-04T00:20:25.033Z",
        "age": 1
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/94.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/94.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/94.jpg"
      }
    }, {
      "name": {
        "title": "Mrs",
        "first": "Tara",
        "last": "Stephens"
      },
      "email": "tara.stephens@example.com",
      "registered": {
        "date": "2016-07-30T08:23:01.698Z",
        "age": 4
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/8.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/8.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/8.jpg"
      }
    }, {
      "name": {
        "title": "Mr",
        "first": "Andre",
        "last": "Kuhn"
      },
      "email": "andre.kuhn@example.com",
      "registered": {
        "date": "2011-02-12T07:26:41.779Z",
        "age": 9
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/44.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
      }
    }, {
      "name": {
        "title": "Mr",
        "first": "Isaac",
        "last": "Harris"
      },
      "email": "isaac.harris@example.com",
      "registered": {
        "date": "2014-04-28T06:46:42.586Z",
        "age": 6
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/4.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
      }
    }, {
      "name": {
        "title": "Mrs",
        "first": "Tammy",
        "last": "James"
      },
      "email": "tammy.james@example.com",
      "registered": {
        "date": "2002-05-19T21:17:51.503Z",
        "age": 18
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/64.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
      }
    }, {
      "name": {
        "title": "Miss",
        "first": "Eileen",
        "last": "Rose"
      },
      "email": "eileen.rose@example.com",
      "registered": {
        "date": "2016-12-30T12:20:57.757Z",
        "age": 4
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/33.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
      }
    }, {
      "name": {
        "title": "Mrs",
        "first": "Alma",
        "last": "Thomas"
      },
      "email": "alma.thomas@example.com",
      "registered": {
        "date": "2013-04-28T10:02:55.931Z",
        "age": 7
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/67.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
      }
    }],
    "info": {
      "seed": "578a7eee848d6544",
      "results": 25,
      "page": 1,
      "version": "1.3"
    }
  };