/**
 * New FSJS project 2 - List Pagination and Filter - v2 - Data version
 * Data file - Includes date formatting helper function and array of student objects
 * URL used to get data - https://randomuser.me/api/?results=42&nat=us&exc=id,login,nat,gender,dob,location,phone,cell
 * Data cleaned and bathed and prettied at - https://www.10bestdesign.com/dirtymarkup/js/
 */

/**
 Format date function - Get date from student object and return short date format
 @param date - Date returned from student object .registered.date
 @return formatted Date string
*/
const formatDate = date => {

	// Format date to add leading zero days and months that are less than 10
	const addZero = n => (n < 10) ? `0${n}` : n;

	// Create new date object or log out error message
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

// Array of cool student objects
const data = {
	"results": [{
		"name": {
			"title": "Miss",
			"first": "Ethel",
			"last": "Dean"
		},
		"email": "ethel.dean@example.com",
		"registered": {
			"date": "2005-12-15T17:19:19.981Z",
			"age": 15
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/25.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/25.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/25.jpg"
		}
	}, {
		"name": {
			"title": "Mrs",
			"first": "Lorraine",
			"last": "Lynch"
		},
		"email": "lorraine.lynch@example.com",
		"registered": {
			"date": "2006-02-24T07:20:07.600Z",
			"age": 14
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/88.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Gregory",
			"last": "Vargas"
		},
		"email": "gregory.vargas@example.com",
		"registered": {
			"date": "2013-03-20T10:51:31.346Z",
			"age": 7
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/23.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/23.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/23.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Lawrence",
			"last": "Martin"
		},
		"email": "lawrence.martin@example.com",
		"registered": {
			"date": "2007-06-10T22:54:34.597Z",
			"age": 13
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/50.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/50.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
		}
	}, {
		"name": {
			"title": "Ms",
			"first": "Stacey",
			"last": "Wells"
		},
		"email": "stacey.wells@example.com",
		"registered": {
			"date": "2004-09-22T23:51:14.756Z",
			"age": 16
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/21.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Terrance",
			"last": "Newman"
		},
		"email": "terrance.newman@example.com",
		"registered": {
			"date": "2007-06-28T22:47:55.943Z",
			"age": 13
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/56.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Morris",
			"last": "Burton"
		},
		"email": "morris.burton@example.com",
		"registered": {
			"date": "2016-02-09T01:59:20.212Z",
			"age": 4
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/6.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/6.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/6.jpg"
		}
	}, {
		"name": {
			"title": "Ms",
			"first": "Terra",
			"last": "Franklin"
		},
		"email": "terra.franklin@example.com",
		"registered": {
			"date": "2008-12-24T08:17:39.173Z",
			"age": 12
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/22.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Ted",
			"last": "Bradley"
		},
		"email": "ted.bradley@example.com",
		"registered": {
			"date": "2017-11-29T14:26:08.753Z",
			"age": 3
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/99.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/99.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/99.jpg"
		}
	}, {
		"name": {
			"title": "Mrs",
			"first": "Celina",
			"last": "Griffin"
		},
		"email": "celina.griffin@example.com",
		"registered": {
			"date": "2006-07-02T20:52:10.045Z",
			"age": 14
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/79.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Duane",
			"last": "Soto"
		},
		"email": "duane.soto@example.com",
		"registered": {
			"date": "2002-09-15T06:52:34.938Z",
			"age": 18
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/53.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/53.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/53.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Ray",
			"last": "Vargas"
		},
		"email": "ray.vargas@example.com",
		"registered": {
			"date": "2007-12-03T23:14:00.943Z",
			"age": 13
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/59.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/59.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Douglas",
			"last": "Torres"
		},
		"email": "douglas.torres@example.com",
		"registered": {
			"date": "2011-11-06T03:20:28.412Z",
			"age": 9
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/68.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/68.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg"
		}
	}, {
		"name": {
			"title": "Ms",
			"first": "Mia",
			"last": "Snyder"
		},
		"email": "mia.snyder@example.com",
		"registered": {
			"date": "2014-05-27T17:00:53.643Z",
			"age": 6
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/54.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/54.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/54.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Mario",
			"last": "Freeman"
		},
		"email": "mario.freeman@example.com",
		"registered": {
			"date": "2012-02-14T17:05:33.490Z",
			"age": 8
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/30.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Herman",
			"last": "Griffin"
		},
		"email": "herman.griffin@example.com",
		"registered": {
			"date": "2009-11-04T04:11:46.511Z",
			"age": 11
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/16.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/16.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg"
		}
	}, {
		"name": {
			"title": "Ms",
			"first": "Marian",
			"last": "Williamson"
		},
		"email": "marian.williamson@example.com",
		"registered": {
			"date": "2010-02-14T20:22:27.272Z",
			"age": 10
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/6.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/6.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/6.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Victor",
			"last": "Rodriquez"
		},
		"email": "victor.rodriquez@example.com",
		"registered": {
			"date": "2006-10-03T19:51:21.474Z",
			"age": 14
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/49.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/49.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/49.jpg"
		}
	}, {
		"name": {
			"title": "Miss",
			"first": "Beverley",
			"last": "Gregory"
		},
		"email": "beverley.gregory@example.com",
		"registered": {
			"date": "2006-02-12T18:14:39.545Z",
			"age": 14
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/72.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
		}
	}, {
		"name": {
			"title": "Mrs",
			"first": "Nellie",
			"last": "Schmidt"
		},
		"email": "nellie.schmidt@example.com",
		"registered": {
			"date": "2011-10-28T22:26:35.012Z",
			"age": 9
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/59.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Carlos",
			"last": "Gibson"
		},
		"email": "carlos.gibson@example.com",
		"registered": {
			"date": "2014-08-30T23:26:32.304Z",
			"age": 6
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/67.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Kevin",
			"last": "Hamilton"
		},
		"email": "kevin.hamilton@example.com",
		"registered": {
			"date": "2004-12-26T12:50:32.419Z",
			"age": 16
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/11.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/11.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/11.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Flenn",
			"last": "Torres"
		},
		"email": "flenn.torres@example.com",
		"registered": {
			"date": "2011-03-09T08:58:59.687Z",
			"age": 9
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/95.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
		}
	}, {
		"name": {
			"title": "Ms",
			"first": "Sue",
			"last": "Kim"
		},
		"email": "sue.kim@example.com",
		"registered": {
			"date": "2011-06-20T11:00:57.292Z",
			"age": 9
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/62.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
		}
	}, {
		"name": {
			"title": "Mrs",
			"first": "Bella",
			"last": "Fields"
		},
		"email": "bella.fields@example.com",
		"registered": {
			"date": "2009-05-08T08:21:03.535Z",
			"age": 11
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/8.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/8.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/8.jpg"
		}
	}, {
		"name": {
			"title": "Miss",
			"first": "Valerie",
			"last": "West"
		},
		"email": "valerie.west@example.com",
		"registered": {
			"date": "2006-05-18T01:36:25.924Z",
			"age": 14
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/36.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Douglas",
			"last": "Pearson"
		},
		"email": "douglas.pearson@example.com",
		"registered": {
			"date": "2005-07-18T19:25:28.539Z",
			"age": 15
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/5.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/5.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg"
		}
	}, {
		"name": {
			"title": "Ms",
			"first": "Dolores",
			"last": "Daniels"
		},
		"email": "dolores.daniels@example.com",
		"registered": {
			"date": "2019-02-22T11:30:51.714Z",
			"age": 1
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/9.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
		}
	}, {
		"name": {
			"title": "Mrs",
			"first": "Billie",
			"last": "Knight"
		},
		"email": "billie.knight@example.com",
		"registered": {
			"date": "2010-02-16T10:51:21.170Z",
			"age": 10
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/37.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/37.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/37.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Luke",
			"last": "Neal"
		},
		"email": "luke.neal@example.com",
		"registered": {
			"date": "2015-06-29T12:12:37.235Z",
			"age": 5
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/17.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/17.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/17.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Billy",
			"last": "Gray"
		},
		"email": "billy.gray@example.com",
		"registered": {
			"date": "2007-07-09T09:05:34.696Z",
			"age": 13
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/43.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/43.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Roy",
			"last": "Evans"
		},
		"email": "roy.evans@example.com",
		"registered": {
			"date": "2010-10-24T17:48:56.923Z",
			"age": 10
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/65.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Shane",
			"last": "Baker"
		},
		"email": "shane.baker@example.com",
		"registered": {
			"date": "2011-12-28T16:08:35.370Z",
			"age": 9
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/51.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Tom",
			"last": "Sims"
		},
		"email": "tom.sims@example.com",
		"registered": {
			"date": "2015-05-07T21:56:31.788Z",
			"age": 5
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/47.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Travis",
			"last": "Brooks"
		},
		"email": "travis.brooks@example.com",
		"registered": {
			"date": "2008-11-23T12:19:36.734Z",
			"age": 12
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/16.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/16.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Karl",
			"last": "Shaw"
		},
		"email": "karl.shaw@example.com",
		"registered": {
			"date": "2007-07-16T12:52:45.439Z",
			"age": 13
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/8.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/8.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/8.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Anthony",
			"last": "Miller"
		},
		"email": "anthony.miller@example.com",
		"registered": {
			"date": "2004-03-31T10:53:11.156Z",
			"age": 16
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/4.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
		}
	}, {
		"name": {
			"title": "Miss",
			"first": "Elizabeth",
			"last": "Jimenez"
		},
		"email": "elizabeth.jimenez@example.com",
		"registered": {
			"date": "2003-06-08T03:57:11.011Z",
			"age": 17
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/4.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Marc",
			"last": "Payne"
		},
		"email": "marc.payne@example.com",
		"registered": {
			"date": "2004-05-22T02:09:35.413Z",
			"age": 16
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/89.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/89.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/89.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Jon",
			"last": "Berry"
		},
		"email": "jon.berry@example.com",
		"registered": {
			"date": "2016-10-10T10:07:05.154Z",
			"age": 4
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/22.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/22.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/22.jpg"
		}
	}, {
		"name": {
			"title": "Miss",
			"first": "Natalie",
			"last": "Arnold"
		},
		"email": "natalie.arnold@example.com",
		"registered": {
			"date": "2019-06-25T18:23:24.775Z",
			"age": 1
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/16.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
		}
	}, {
		"name": {
			"title": "Mr",
			"first": "Allen",
			"last": "Thompson"
		},
		"email": "allen.thompson@example.com",
		"registered": {
			"date": "2010-08-14T06:26:27.502Z",
			"age": 10
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/48.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/48.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/48.jpg"
		}
	}],
	"info": {
		"seed": "0ee878bdc7348013",
		"results": 42,
		"page": 1,
		"version": "1.3"
	}
}