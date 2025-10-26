import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import rrulePlugin from '@fullcalendar/rrule'
import deLocale from '@fullcalendar/core/locales/de'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

// https://fullcalendar.io/docs/react
// https://fullcalendar.io/docs/list-view
// https://fullcalendar.io/docs/event-object
// https://fullcalendar.io/docs/rrule-plugin
// https://dateutil.readthedocs.io/en/stable/rrule.html
// https://fullcalendar.io/docs/google-calendar

export default function Calendar() {
  var count = 0;
  return (
    <FullCalendar
      plugins={[ googleCalendarPlugin, rrulePlugin, listPlugin ]}
      googleCalendarApiKey='AIzaSyAdplIqmONF4uGdW8d4ATAoMsfTQYbwYZc'
      initialView='list'
      duration={{ days: 90 }}
      height="auto"
      weekends={true}
      showNonCurrentDates={false}
      locale={deLocale}
      headerToolbar={{
        left: '',
        center: '',
        right: ''
      }}
      listDayFormat={{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        weekday: 'long'
      }}
      listDaySideFormat={false}
      allDayText='ganztägig'
      validRange={function (nowDate) {
        return {
          start: nowDate
        };
      }}
      eventSources={[
        {
          // Base64: MmJhdGV2Zm41Z2dxMmwzcmtrZzBkdDQ4cW91N2Exc2xAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20
          className: 'vorstand',
          googleCalendarId: '2batevfn5ggq2l3rkkg0dt48qou7a1sl@import.calendar.google.com',
          backgroundColor: '#d44245'
        },
        {
          // Base64: ZWh2aHU0c282cWtuYWZkNWt2dDQzcGVjN3RqbHBmNnJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20
          className: 'festausschuss',
          googleCalendarId: 'ehvhu4so6qknafd5kvt43pec7tjlpf6r@import.calendar.google.com',
          backgroundColor: '#fde512'
        },
        {
          // Base64: ZmI5c2ExaTFvY2wycDZtaTNuYXQ1bWxvYTVzc3VnMnVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20
          className: 'gemeinschaftsarbeit',
          googleCalendarId: 'fb9sa1i1ocl2p6mi3nat5mloa5ssug2u@import.calendar.google.com',
          backgroundColor: '#11d075'
          }
        ]
      }
      eventDidMount={function (arg) {
          if (count > 4) {
            arg.event.remove();
          }
          count = count + 1;
        }
      }
      eventDataTransform={function (eventData) {
        if (eventData.url?.endsWith('MmJhdGV2Zm41Z2dxMmwzcmtrZzBkdDQ4cW91N2Exc2xAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20')) {
          eventData.url = "/vorstand";
        }
        if (eventData.url?.endsWith('ZWh2aHU0c282cWtuYWZkNWt2dDQzcGVjN3RqbHBmNnJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20')) {
          eventData.url = "/festausschuss";
        }
        if (eventData.url?.endsWith('ZmI5c2ExaTFvY2wycDZtaTNuYXQ1bWxvYTVzc3VnMnVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20')) {
          eventData.url = "/gemeinschaftsarbeit";
        }
      }
      }
      eventClick={function (event) {
        if (event.event.url.includes("google.com") ) {
          event.jsEvent.stopPropagation();
          event.jsEvent.preventDefault();
        }
      }
    }
    />
  )
}




