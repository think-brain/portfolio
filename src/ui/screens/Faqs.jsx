import React from 'react'

const Faqs = () => {
  return (
    <div id="faqs">
      <section class="text-gray-700">
        <div class="container px-5 py-6 mx-auto">
          <div class="text-center mb-20">
            <h1 class="text-center font-bold text-4xl py-12">
              Frequently Asked Question
            </h1>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4 border-2 p-2 cursor-pointer">
                <summary class="font-semibold rounded-md py-2 px-4">
                  Is there any upfront cost involved?
                </summary>

                <span class="px-4 py-2">
                  Yes, 10000 INR (refundable) subject to successful completion of the Program.
                </span>
              </details>
              <details class="mb-4 border-2 p-2 cursor-pointer">
                <summary class="font-semibold  rounded-md py-2 px-4">
                  What is the duration of the Program?
                </summary>

                <span class="px-4 py-2">
                  Our Program duration is approx. 6 months.
                </span>
              </details>
              <details class="mb-4 border-2 p-2 cursor-pointer">
                <summary class="font-semibold  rounded-md py-2 px-4">
                  What is the style of teaching?
                </summary>

                <span class="px-4 py-2">
                  It will be based on hybrid learning (live classes + pre-recorded lectures).
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4 border-2 p-2 cursor-pointer">
                <summary class="font-semibold rounded-md py-2 px-4">
                  What is the eligibility for Program?
                </summary>

                <span>
                  Any Graduates or students in their final year of study.
                </span>
              </details>
              <details class="mb-4 border-2 p-2 cursor-pointer">
                <summary class="font-semibold  rounded-md py-2 px-4">
                  I come from non-computer science background, would I be eligible for Data Science jobs?
                </summary>

                <span>
                  Yes, graduates from any field can get job in data science after proper training and mentoring.
                </span>
              </details>
              <details class="mb-4 border-2 p-2 cursor-pointer">
                <summary class="font-semibold rounded-md py-2 px-4">
                  Is there any test to pass for enrollment in program?
                </summary>

                <span>
                  Yes, an aptitude test, followed by an interview.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faqs
