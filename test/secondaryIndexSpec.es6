
/* global describe */
/* global it */

import {assert} from 'chai'
import createIndex from '../src/secondaryIndex'

var db = [
  { age: 46,
  name: 'Lamar Goodwin',
  phone: '817-529-2557',
  title: 'Global Usability Coordinator' },
  { age: 13,
  name: 'Elmo Hansen',
  phone: '1-632-301-4062 x8351',
  title: 'Customer Paradigm Assistant' },
  { age: 43,
  name: 'Ashton Oberbrunner',
  phone: '1-292-015-9298 x19171',
  title: 'Legacy Security Planner' },
  { age: 32,
  name: 'Ms. Kiera Hodkiewicz',
  phone: '1-742-905-8677',
  title: 'Legacy Security Planner' },
  { age: 10,
  name: 'Hilda O\'Kon',
  phone: '118.357.9132 x76245',
  title: 'Dynamic Communications Agent' },
  { age: 38,
  name: 'Leland Bahringer',
  phone: '114.754.5482 x7853',
  title: 'Internal Program Officer' },
  { age: 21,
  name: 'Axel Block',
  phone: '816-557-8326 x083',
  title: 'Forward Interactions Liason' },
  { age: 14,
  name: 'Wendy Dare',
  phone: '966.968.5997 x42838',
  title: 'Infrastructure Associate' },
  { age: 23,
  name: 'Miss Fermin Bartell',
  phone: '(003) 694-6712',
  title: 'Product Applications Designer' },
  { age: 68,
  name: 'Marquise Weimann',
  phone: '400.157.6206',
  title: 'Corporate Response Orchestrator' },
  { age: 24,
  name: 'Kaley Jones',
  phone: '1-426-266-8041',
  title: 'District Brand Producer' },
  { age: 51,
  name: 'Dr. Jess Stokes',
  phone: '1-754-630-5989 x8753',
  title: 'Chief Tactics Supervisor' },
  { age: 24,
  name: 'Durward Runolfsson',
  phone: '726.255.5565',
  title: 'Regional Configuration Planner' },
  { age: 64,
  name: 'Clemens Howell Dr.',
  phone: '1-926-168-6208',
  title: 'Global Communications Orchestrator' },
  { age: 22,
  name: 'Catherine Predovic',
  phone: '206-479-6915 x835',
  title: 'Dynamic Accountability Architect' },
  { age: 36,
  name: 'Odie Reichel',
  phone: '(695) 562-6049 x68079',
  title: 'Forward Configuration Representative' },
  { age: 32,
  name: 'Wilfredo Strosin',
  phone: '071.478.7926',
  title: 'Dynamic Web Consultant' },
  { age: 8,
  name: 'Makayla McLaughlin',
  phone: '1-667-221-6294 x87922',
  title: 'Implementation Facilitator' },
  { age: 41,
  name: 'Ardella O\'Conner',
  phone: '1-927-933-8004',
  title: 'Product Operations Supervisor' },
  { age: 8,
  name: 'Magdalen Zulauf Mr.',
  phone: '992-726-6046 x72367',
  title: 'Central Accountability Manager' },
  { age: 62,
  name: 'Santino Kuvalis',
  phone: '(297) 534-9135',
  title: 'Direct Accounts Analyst' },
  { age: 48,
  name: 'Elva Graham',
  phone: '229.798.4078 x4705',
  title: 'International Mobility Facilitator' },
  { age: 16,
  name: 'Lesley Howe',
  phone: '(829) 112-7415 x2891',
  title: 'Internal Response Agent' },
  { age: 49,
  name: 'Antonio Monahan Mr.',
  phone: '(682) 162-2301',
  title: 'Integration Technician' },
  { age: 3,
  name: 'Shana Lubowitz',
  phone: '849-809-2691 x787',
  title: 'Senior Detector Agent' },

  { age: 1,
  name: 'Serena Bruen',
  phone: '1-070-021-2968',
  title: 'Senior Detector Agent' },
  { age: 1,
  name: 'Clemmie Powlowski',
  phone: '1-796-310-8197 x253',
  title: 'Senior Detector Agent' },
  { age: 2,
  name: 'Albertha Simonis Ms.',
  phone: '1-421-993-2782 x073',
  title: 'Senior Fax Administrator' },
  { age: 4,
  name: 'Kavon Hammes',
  phone: '(913) 113-1961 x68847',
  title: 'Senior Identity Engineer' },
  { age: 5,
  name: 'Kyle MacGyver',
  phone: '333-464-6778 x7218',
  title: 'Senior Klingon Consultant' }
]

describe('secondaryIndex', () => {
  describe('simple keys', () => {
    let index = createIndex()

    it('set does not error', (done) => {
      db.forEach(function (record) {
        index.set(record.age, record.name)
      })
      done()
    })

    it('get returns correct result', (done) => {
      let result = index.get(1)
      assert.deepEqual(result, ['Clemmie Powlowski', 'Serena Bruen'])
      done()
    })

    it('between returns correct result', (done) => {
      let result = index.between([1], [4])
      assert.deepEqual(result, ['Clemmie Powlowski', 'Serena Bruen', 'Albertha Simonis Ms.', 'Shana Lubowitz'])
      done()
    })
  })

  describe('compound keys', () => {
    let index = createIndex()

    it('set does not error', (done) => {
      db.forEach(function (record) {
        index.set([record.title, record.age], record.name)
      })
      done()
    })

    it('get returns correct result one level deep', (done) => {
      let result = index.get('Senior Detector Agent')
      assert.deepEqual(result, ['Clemmie Powlowski', 'Serena Bruen', 'Shana Lubowitz'])
      done()
    })

    it('get returns correct result two levels deep', (done) => {
      let result = index.get(['Senior Detector Agent', 1])
      assert.deepEqual(result, ['Clemmie Powlowski', 'Serena Bruen'])
      done()
    })

    it('between returns correct result for one level deep', (done) => {
      let result = index.between(['Internal Response Agent'], ['Senior Detector Agent'], {rightInclusive: true})
      assert.deepEqual(result, ['Lesley Howe', 'Elva Graham', 'Ms. Kiera Hodkiewicz', 'Ashton Oberbrunner', 'Miss Fermin Bartell', 'Ardella O\'Conner', 'Durward Runolfsson', 'Clemmie Powlowski', 'Serena Bruen', 'Shana Lubowitz'])
      done()
    })

    it('between returns correct result for two levels deep', (done) => {
      let result = index.between(['Internal Response Agent', 20], ['Senior Detector Agent', 3], {rightInclusive: true, offset: 1})
      assert.deepEqual(result, ['Ms. Kiera Hodkiewicz', 'Ashton Oberbrunner', 'Miss Fermin Bartell', 'Ardella O\'Conner', 'Durward Runolfsson', 'Clemmie Powlowski', 'Serena Bruen', 'Shana Lubowitz'])
      done()
    })

    it("Query {'>': ['Internal Response Agent', 20], '<=': ['Senior Detector Agent', 3], offset: 2, limit: 5}", (done) => {
      let result = index.query({'>': ['Internal Response Agent', 20], '<=': ['Senior Detector Agent', 3], offset: 2, limit: 5})
      assert.deepEqual(result, ['Ashton Oberbrunner', 'Miss Fermin Bartell', 'Ardella O\'Conner', 'Durward Runolfsson', 'Clemmie Powlowski'])
      done()
    })

    it("Query {'>': ['Internal Response Agent', 20], '<=': ['Senior Detector Agent', 3], offset: 1}", (done) => {
      let result = index.query({'>': ['Internal Response Agent', 20], '<=': ['Senior Detector Agent', 3], offset: 1})
      assert.deepEqual(result, ['Ms. Kiera Hodkiewicz', 'Ashton Oberbrunner', 'Miss Fermin Bartell', 'Ardella O\'Conner', 'Durward Runolfsson', 'Clemmie Powlowski', 'Serena Bruen', 'Shana Lubowitz'])
      done()
    })
  })
})
