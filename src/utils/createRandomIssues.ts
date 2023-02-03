import { faker } from "@faker-js/faker"

import { IssueStatus } from "@/enums/IssueStatus.enum"
import { Issue } from "@/types/Issue"

export function createRandomIssues(count = 10): Issue[] {
  return [...Array(count)].map((_, index) => ({
    id: index + 1,
    title: faker.lorem.sentence(),
    description: faker.lorem.sentences(),
    status: faker.helpers.arrayElement(Object.values(IssueStatus)),
    createdAt: faker.date.past(0).toLocaleDateString("pl"),
    tags: faker.helpers.uniqueArray(faker.hacker.noun, Math.floor(Math.random() * 5)),
    user: {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    },
  }))
}
