function location() { } $(function () {
    const tourLocations = new Map();

    tourLocations.set('4/29', 'Lincoln, NE');
    tourLocations.set('4/30', 'Lincoln, NE');
    tourLocations.set('5/1', 'Nashville, TN');
    tourLocations.set('5/2', 'Nashville, TN');
    tourLocations.set('5/3', 'Nashville, TN');
    tourLocations.set('5/4', 'Nashville, TN');
    tourLocations.set('5/5', 'Madison, WI');
    tourLocations.set('5/6', 'Minneapolis, MN');
    tourLocations.set('5/7', 'Kansas City, MO');
    tourLocations.set('5/8', 'Nashville, TN');
    tourLocations.set('5/9', 'Nashville, TN');
    tourLocations.set('5/10', 'Nashville, TN');
    tourLocations.set('5/11', 'Nashville, TN');
    tourLocations.set('5/12', 'Nashville, TN');
    tourLocations.set('5/13', 'Columbus, OH');
    tourLocations.set('5/14', 'Indianapolis, IN');
    tourLocations.set('5/15', 'Louisville, KY');
    tourLocations.set('5/16', 'Nashville, TN');
    tourLocations.set('5/17', 'Nashville, TN');
    tourLocations.set('5/18', 'Sandy, UT');
    tourLocations.set('5/19', 'Sandy, UT');
    tourLocations.set('5/20', 'Denver, CO');
    tourLocations.set('5/21', 'Council Bluffs, IA');
    tourLocations.set('5/22', 'Apple Valley, MN');
    tourLocations.set('5/23', 'Apple Valley, MN');
    tourLocations.set('5/24', 'Apple Valley, MN');
    tourLocations.set('5/25', 'Apple Valley, MN');
    tourLocations.set('5/26', 'Apple Valley, MN');
    tourLocations.set('5/27', 'Apple Valley, MN');
    tourLocations.set('5/28', 'Apple Valley, MN');
    tourLocations.set('5/29', 'Apple Valley, MN');
    tourLocations.set('5/30', 'Apple Valley, MN');
    tourLocations.set('5/31', 'Apple Valley, MN');
    tourLocations.set('6/1', 'Apple Valley, MN');
    tourLocations.set('6/2', 'Apple Valley, MN');
    tourLocations.set('6/3', 'Houston, TX');
    tourLocations.set('6/4', 'Irving, TX');
    tourLocations.set('6/5', 'Madison, WI');
    tourLocations.set('6/6', 'Nashville, TN');
    tourLocations.set('6/7', 'Nashville, TN');
    tourLocations.set('6/8', 'Vienna, VA');
    tourLocations.set('6/9', 'Charlotee, NC');
    tourLocations.set('6/10', 'Raleigh, NC');
    tourLocations.set('6/11', 'Alpharetta, GA');
    tourLocations.set('6/12', 'Nashville, TN');
    tourLocations.set('6/13', 'Nashville, TN');
    tourLocations.set('6/14', 'Nashville, TN');
    tourLocations.set('6/15', 'Nashville, TN');
    tourLocations.set('6/16', 'Boston, MA');
    tourLocations.set('6/17', 'Philadelphia, PA');
    tourLocations.set('6/18', 'New York City, NY');
    tourLocations.set('6/19', 'Nashville, TN');
    tourLocations.set('6/20', 'Nashville, TN');
    tourLocations.set('6/21', 'Nashville, TN');
    tourLocations.set('6/22', 'Nashville, TN');
    tourLocations.set('6/23', 'Huntsville, AL');
    tourLocations.set('6/24', 'Birgmingham, AL');
    tourLocations.set('6/25', 'Nashville, TN');

    const currentDate = new Date();
    var date = (currentDate.getMonth() + 1) + '/' + currentDate.getDate();

    // document.querySelector('#locationText').innerHTML = tourLocations.get(date);
});