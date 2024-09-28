                if ( (cnt-1) % 3 === 0) {
                    row = document.createElement('div');
                    row.className = 'row';
                    container.appendChild(row);
                }

                const col = document.createElement('div');
                col.className = 'col-md-4 col-sm-6 col-xs-12';
                const mediaDiv = document.createElement('div');
                mediaDiv.className = 'media';

                // Image
                const mediaLeft = document.createElement('div');
                mediaLeft.className = 'media-left';
                const img = document.createElement('img');
                img.className = 'media-object';
                img.src = `members/photos/${member.photo || 'pumpkin_1.jpg'}`;
                img.alt = '';
                img.width = 96;
                mediaLeft.appendChild(img);

                // Media Body
                const mediaBody = document.createElement('div');
                mediaBody.className = 'media-body';

                if (member.ename) {
                    const ename = document.createElement('h5');
                    ename.className = 'media-heading';
                    ename.textContent = member.ename;
                    mediaBody.appendChild(ename);
                }
                if (member.cname) {
                    const cname = document.createElement('h5');
                    cname.className = 'media-heading';
                    cname.textContent = member.cname;
                    mediaBody.appendChild(cname);
                }

                // Details
                const small = document.createElement('small');
                if (member.from) {
                    small.textContent = `${member.from}—${member.to || ''}`;
                }
                if (member.class) {
                    small.innerHTML += `<br/>${member.class}`;
                }
                if (member.with) {
                    small.innerHTML += `<br/>Now with ${member.with}`;
                }
                mediaBody.appendChild(small);

                // Contact
                const pagination = document.createElement('ul');
                pagination.className = 'pagination pagination-sm margin-v4px';
                if (member.phone) {
                    const phoneLi = document.createElement('li');
                    phoneLi.innerHTML = `<span class='fa fa-phone' data-toggle='tooltip' data-placement='bottom' title='${member.phone}'></span>`;
                    pagination.appendChild(phoneLi);
                }
                if (member.email) {
                    const emailLi = document.createElement('li');
                    emailLi.innerHTML = `<a href='mailto:${member.email}'><span class='fa fa-envelope-o'></span></a>`;
                    pagination.appendChild(emailLi);
                }
                if (member.link) {
                    const linkLi = document.createElement('li');
                    linkLi.innerHTML = `<a href='${member.link}' target='_blank'><span class='fa fa-link'></span></a>`;
                    pagination.appendChild(linkLi);
                }
                mediaBody.appendChild(pagination);

                // Append to mediaDiv
                mediaDiv.appendChild(mediaLeft);
                mediaDiv.appendChild(mediaBody);
                col.appendChild(mediaDiv);
                row.appendChild(col);

                if (cnt % 3 === 2) {
                    container.appendChild(row);
                }