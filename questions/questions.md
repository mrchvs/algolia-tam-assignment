Question 1

From: marissa@startup.com
Subject: Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,
Marissa

**Answer:**

Hi Marissa,

Thanks for your message and honest feedback - I will share it internally with our product team.

If you are looking to clear or delete multiple indices, you can actually do it via the new dashboard. Simply

- click on the ‘Select page’ button on the top left of your Index table
- select the indices you’d like to update
- on the top right corner of your Index table: choose whether you’d like to ‘Clear indices’ or ‘Delete indices’

Here’s a quick video to show you how it works:

![alt text](https://github.com/mrchvs/algolia-tam-assignment/blob/ddf50be3670006bdbe14769861f43b8c04be2cf1/questions/clear:delete%20index.gif)

Alternatively, you can also use Algolia's API to [clear](https://www.algolia.com/doc/api-reference/api-methods/clear-objects/) or [delete](https://www.algolia.com/doc/api-reference/api-methods/delete-index/) indexes.

Let me know how it goes. If you have any other questions feel free to reach out, I’d be happy to help.

Kind regards,

Marie

--

Question 2:

From: carrie@coffee.com
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.

**Answer:**

Hi Carrie,

Thanks for your message, and sorry to hear about this issue.

Algolia limits the size of your records, for performance reasons. When you try to index records that exceed your plan’s limit, the API returns the ‘Record is too big’ error. when this happens, it means you need to reduce the size of your records. You can learn more about size limits [on this page](https://www.algolia.com/doc/faq/basics/is-there-a-size-limit-for-my-index-records/), and reducing record size [here](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/reducing-object-size/).

In your situation, I’d recommend indexing only metadata useful in the context of search. Could you try removing the metadata that is not for search, before sending your records to Algolia? This should fix the issue.

Let me know how it goes or if you have any further questions, I’d be happy to help.

Kind regards,

Marie

--

Question 3:

From: marc@hotmail.com
Subject: Error on website

Hi, my website is not working and here's the error:

error message

Can you fix it please?

**Answer:**

Hi Marc,

Thanks for your message, and sorry to hear your website is not working.

It seems that you’re trying to use Searchkit, which has not been defined in your code. You might want to import or require it at the beginning of your index.js file.

Searchkit is a library that’s not managed by Algolia, so if you encounter any further issues feel free to contact them directly.

If you have any questions regarding your Algolia account, or would like to see how it compares, feel free to contact me, I’d be happy to help.

Kind regards,

Marie
