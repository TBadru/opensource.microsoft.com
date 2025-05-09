//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

export default function Using() {
  return (
    <div className="pb-6">
      <h3 className="h3 mb-4">Open source use guidance</h3>
      <p>
        <em>
          This is a summary of how we approach using open source at Microsoft.
        </em>
      </p>
      <p>
        Using open source in Microsoft is encouraged. Building on the efforts of {' '}
        others allows us to create meaningful value for our customers faster and {' '}
        engage with new ecosystems and user-bases in a natural way.
      </p>
      <p>
        Take the following steps to use an open source component at Microsoft:
      </p>
      <ul className="ul mt-4">
        <li>
          <b>Register All Open Source:</b>{' '}
          Following the open source compliance policy, all open source components must {' '}
          be registered. You can do this two ways:
          <ul>
            <li>
              <b>One Engineering System automatically registers most types of open source.</b>{' '}
              Open source detectors are run and will handle the registration of open source components. {' '}
              Legal and security alerts will be raised with follow-up actions if there is{' '}
              additional work required, such as meeting legal obligations, posting to the third-party {' '}
              disclosures site, addressing a security issue, or if a commercial or unknown license is present.
            </li>
            <li>
              <b>
                For repos using certain types of open source, a Manual Registration approach or {' '}
                file can be used in lieu of detectors.
              </b>{' '}
              Boutique engineering systems will need {' '}
              to refer to the non-standard build environments content.
            </li>
          </ul>
        </li>
        <li>
          <b>Distribution Requirements:</b>{' '}
          If you plan on distributing the open source component in a Microsoft Product or Service, {' '}
          you must take additional steps, as guided by legal alerts, that might include {' '}
          <b>NOTICE file generation</b> and <b>making source code available.</b>
        </li>
      </ul>
    </div>
  );
}
