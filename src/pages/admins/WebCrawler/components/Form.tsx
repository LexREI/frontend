import React, { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import { webCrawlerUsingPost } from '@/services/WebCrawlerController';
import { DefaultContext } from '@/contexts/default_context';

export default function Form() {
  const { setErrorDescription } = useContext(DefaultContext);

  const [form, setForm] = useState<API.WebCrawlerBody>({
    websiteName: '',
    startUrls: [''],
    includeUrls: [['']],
    titleCSS: '',
    contentCSS: '',
    maxRequestsPerCrawl: 0,
    maxDepth: 0,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'includeUrls') {
      const arrayIndex = parseInt(e.target.dataset.arrayIndex ?? '0', 10);
      const urlIndex = parseInt(e.target.dataset.urlIndex ?? '0', 10);

      const newIncludeUrls = [...form.includeUrls];
      newIncludeUrls[arrayIndex] = [...newIncludeUrls[arrayIndex]];
      newIncludeUrls[arrayIndex][urlIndex] = value;

      setForm({ ...form, includeUrls: newIncludeUrls });
    } else if (name === 'startUrls') {
      setForm({ ...form, startUrls: [value] });
    } else {
      setForm({ ...form, [name]: value });
    }
    console.log('form:', form);
  };

  const addUrlArray = () => {
    setForm({ ...form, includeUrls: [...form.includeUrls, ['']] });
  };

  const removeUrlArray = (arrayIndex: number) => {
    const newIncludeUrls = form.includeUrls.filter(
      (_, idx) => idx !== arrayIndex
    );
    setForm({ ...form, includeUrls: newIncludeUrls });
  };

  const onClickWebCrawler = async (e: any) => {
    e.preventDefault();

    try {
      const res = await webCrawlerUsingPost(form);
      console.log('res:', res);
    } catch (err: any) {
      setErrorDescription(err.response.data.message);
    }
  };

  return (
    <form className="h-full">
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-white">
            Web Content Crawler
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-4">
            <div>
              <h2 className="text-2xl font-semibold leading-7 text-white">
                Crawler Settings
              </h2>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="websiteName"
                className="block text-sm font-medium leading-6 text-white"
              >
                Website Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    name="websiteName"
                    id="websiteName"
                    autoComplete="text"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Website name(do not duplicate)"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="startUrls"
                className="block text-sm font-medium leading-6 text-white"
              >
                Start URL
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="url"
                    name="startUrls"
                    id="startUrls"
                    autoComplete="url"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="https://"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="includeUrls"
                className="block text-sm font-medium leading-6 text-white"
              >
                Include URLs (globs) (optional)
              </label>
              <div className="col-span-full">
                {form.includeUrls.map((urlArray, arrayIndex) => (
                  <div key={arrayIndex}>
                    {urlArray.map((url, urlIndex) => (
                      <div className="flex gap-2 mt-2">
                        <div
                          key={urlIndex}
                          className="flex w-full rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                        >
                          <input
                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                            type="url"
                            name="includeUrls"
                            data-array-index={arrayIndex}
                            data-url-index={urlIndex}
                            value={url}
                            onChange={onChange}
                          />
                        </div>
                        <Button
                          size="sm"
                          variant="destructive"
                          type="button"
                          onClick={() => removeUrlArray(arrayIndex)}
                        >
                          X
                        </Button>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="mt-4">
                  <Button
                    size="sm"
                    type="button"
                    variant="secondary"
                    onClick={addUrlArray}
                  >
                    Add URL
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="titleCSS"
                className="block text-sm font-medium leading-6 text-white"
              >
                Title CSS Selector
              </label>
              <div className="mt-2">
                <div className="flex w-full rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    name="titleCSS"
                    id="titleCSS"
                    autoComplete="text"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="h1"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="contentCSS"
                className="block text-sm font-medium leading-6 text-white"
              >
                Content CSS Selector
              </label>
              <div className="mt-2">
                <div className="flex w-full rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    name="contentCSS"
                    id="contentCSS"
                    autoComplete="text"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="#display_code_many_law_sections"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="maxRequestsPerCrawl"
                className="block text-sm font-medium leading-6 text-white"
              >
                Max Requests Per Crawl(optional)
              </label>
              <div className="mt-2">
                <div className="flex w-full rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="number"
                    name="maxRequestsPerCrawl"
                    id="maxRequestsPerCrawl"
                    min="1"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="maxDepth"
                className="block text-sm font-medium leading-6 text-white"
              >
                maxDepth
              </label>
              <div className="mt-2">
                <div className="flex w-full rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="number"
                    name="maxDepth"
                    id="maxDepth"
                    min="1"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-white"
        >
          Cancel
        </button>
        <Button type="button" onClick={(e) => onClickWebCrawler(e)}>
          Save
        </Button>
      </div>
    </form>
  );
}
